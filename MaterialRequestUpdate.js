// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixData from 'wix-data';
import { authentication, currentMember } from 'wix-members';

$w.onReady(function () {
    var currentItem = $w('#dynamicDataset').getCurrentItem()

    currentMember.getMember().then((memberInfo) => {

        if (currentItem.userReference == memberInfo._id) {
            $w('#redirectSection').hide()
            $w('#formSection').show()

            $w('#firstNameText').value = currentItem.firstName
            $w('#lastNameText').value = currentItem.lastName
            $w('#schoolNameText').value = currentItem.shortAnswerField
            $w('#emailText').value = currentItem.email
            $w('#dropdownRequestType').value = currentItem.dropDown
            $w('#itemTypeText').value = currentItem.shortAnswerField2
            $w('#descriptionText').value = currentItem.longAnswerField
        }

    })

});

export function UpdateData(event) {
    var currentItem = $w('#dynamicDataset').getCurrentItem()

    if (! $w('#firstNameText').valid) {
        console.log("scream")
        return
    }

    let toUpdate = {
        "_id": currentItem._id,
        "firstName": $w('#firstNameText').value,
        "lastName": $w('#lastNameText').value,
        "shortAnswerField": $w('#schoolNameText').value,
        "email": $w('#emailText').value,
        "dropDown": $w('#dropdownRequestType').value,
        "shortAnswerField2": $w('#itemTypeText').value,
        "longAnswerField": $w('#descriptionText').value,
        "submissionTime": currentItem.submissionTime,
    };

    wixData.update("support03", toUpdate)
        .then((results) => {
            console.log(results); //see item below
        })
        .catch((err) => {
            console.log(err);
        });
}