// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { authentication, currentMember } from 'wix-members';
import wixWindow from 'wix-window';
import wixLocation from 'wix-location';
import wixData from 'wix-data';

$w.onReady(function () {
    $w('#requestDataset').onReady(() => {
        var currentItem = $w('#requestDataset').getCurrentItem()
        console.log(currentItem.userReference)

        currentMember.getMember().then((memberInfo) => {
            console.log(memberInfo)
            if (currentItem.userReference == memberInfo._id) {
                $w('#editButton').show()
                console.log("Edit button shown")
            } else {
                console.log("Member not post creator")
            }
        })

        $w('#posterName').text = "Posted by: " + currentItem.firstName + " " + currentItem.lastName

        $w('#textSchool').text = "School: " + currentItem.shortAnswerField

        $w('#datePosted').text = "Posted date: " + currentItem.submissionTime

        // https://www.wix.com/velo/reference/wix-data/wixdataaggregate/group
        // count number of offers
        const filter = wixData.filter().eq("requestReference", currentItem._id);

        console.log("Querying offers collection")
        wixData.aggregate("offersCollection")
            .filter(filter)
            .count()
            .run()
            .then((results) => {
                console.log(results)
                if (results.items.length > 0) {
                    $w('#offersSubmittedText').text = results.items.length + " offers submitted"

                    currentMember.getMember().then((memberInfo) => {
                        if (currentItem.userReference == memberInfo._id) {
                            $w('#viewOffersButton').show()
                        }
                    })
                } else {
                    console.log("No offers found")
                    // handle case where no matching items found
                    $w('#offersSubmittedText').text = "No offers submitted yet"
                }
            })
            .catch((error) => {
                let errorMsg = error.message;
                let code = error.code;
            });

    })

});

export function donateButton(event) {
    var currentItem = $w('#requestDataset').getCurrentItem()

    wixWindow.openLightbox("Offer Donation", {
        "currentItem": currentItem,
    })
}

export function editButton_click(event) {
    var currentItem = $w('#requestDataset').getCurrentItem()

    console.log("/request/update/" + currentItem._id)

    // go to material request page
    wixLocation.to("/request/update/" + currentItem._id);
}

export function viewOffersButton_click(event) {
    // take users to offer view page
        var currentItem = $w('#requestDataset').getCurrentItem()

    console.log("/request/offers/" + currentItem._id)

    // go to material request page
    wixLocation.to("/request/offers/" + currentItem._id);
}