// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixData from 'wix-data';
import { authentication, currentMember } from 'wix-members';
import wixWindow from 'wix-window';

$w.onReady(function () {
    $w('#requestDataset').onReady(() => {
        var currentItem = $w('#requestDataset').getCurrentItem()
        console.log(currentItem)

        currentMember.getMember().then((memberInfo) => {
            console.log("id:", currentItem.userReference)

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
    })

});

export function UpdateData(event) {

    var currentItem = $w('#requestDataset').getCurrentItem()

    if (!$w('#firstNameText').valid) {
        $w('#errorText').show()
        $w('#errorText').text = "First Name field cannot be empty!"
        return
    }

    if (!$w('#lastNameText').valid) {
        $w('#errorText').show()
        $w('#errorText').text = "Last Name field cannot be empty!"
        return
    }

    if (!$w('#schoolNameText').valid) {
        $w('#errorText').show()
        $w('#errorText').text = "School Name field cannot be empty!"
        return
    }

    if (!$w('#emailText').valid) {
        $w('#errorText').show()
        $w('#errorText').text = "Email Text field cannot be empty!"
        return
    }

    if (!$w('#dropdownRequestType').valid) {
        $w('#errorText').show()
        $w('#errorText').text = "Request Type field cannot be empty!"
        return
    }

    if (!$w('#itemTypeText').valid) {
        $w('#errorText').show()
        $w('#errorText').text = "Item Type field cannot be empty!"
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

                var currentItem = $w('#requestDataset').getCurrentItem()

                wixWindow.openLightbox("Request Updated", {
                    "currentItem": currentItem,
                })
        })
        .catch((err) => {
            console.log(err);
        });
}