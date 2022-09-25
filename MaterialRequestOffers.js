// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { authentication, currentMember } from 'wix-members';
import wixWindow from 'wix-window';
import wixLocation from 'wix-location';
import wixData from 'wix-data';

$w.onReady(function () {
    $w('#requestDataset').onReady(() => {
        var currentItem = $w('#requestDataset').getCurrentItem()

        var filter = wixData.filter().eq("requestReference", currentItem._id);

        $w("#offersDataset").setFilter(filter).then(() => {
            // add address line

            $w('#offersRepeater').forEachItem(($item, itemData, index) => {
                console.log("address", itemData.meetingAddressProposed.formatted)
                $item("#addressText").text = itemData.meetingAddressProposed.formatted

				if(itemData._id == currentItem.offerId) {
					$w('#acceptOfferButton').hide()
				}
            })

            if (currentItem.isFulfilled) {

                wixData.get("offersCollection", currentItem.offerId)
                    .then((item) => {
                        console.log(item); //see item below

                        $w('#currentOfferSection').show()
                        $w('#currentOfferSection').expand()
						
                        $w('#finalOffererName').text =  item.offererName
                        $w('#finalOffererEmail').text =  item.email
                        $w('#finalOffererLocation').text =  item.meetingAddressProposed.formatted

                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

        })

    });
});

export function backButton_click(event) {
    var currentItem = $w('#requestDataset').getCurrentItem()

    console.log("/request/" + currentItem._id)

    // go to material request page
    wixLocation.to("/request/" + currentItem._id);
}

export function acceptOfferButton_click(event) {
    var currentItem = $w('#requestDataset').getCurrentItem()
    console.log(event)

    let toUpdate = {
        "_id": currentItem._id,
        "firstName": currentItem.firstName,
        "lastName": currentItem.lastName,
        "shortAnswerField": currentItem.shortAnswerField,
        "email": currentItem.email,
        "dropDown": currentItem.dropDown,
        "shortAnswerField2": currentItem.shortAnswerField2,
        "longAnswerField": currentItem.longAnswerField,
        "submissionTime": currentItem.submissionTime,
        "isFulfilled": true,
        "offerId": event.context.itemId,
    };

    wixData.update("support03", toUpdate)
        .then((results) => {
            console.log(results); //see item below
            wixLocation.to("https://cyberyeet123.wixsite.com/teachers-lounge/request/offers/" + currentItem._id);
        })
        .catch((err) => {
            console.log(err);
        });
}

export function offerCancelButton_click(event) {
	var currentItem = $w('#requestDataset').getCurrentItem()
    console.log(event)

    let toUpdate = {
        "_id": currentItem._id,
        "firstName": currentItem.firstName,
        "lastName": currentItem.lastName,
        "shortAnswerField": currentItem.shortAnswerField,
        "email": currentItem.email,
        "dropDown": currentItem.dropDown,
        "shortAnswerField2": currentItem.shortAnswerField2,
        "longAnswerField": currentItem.longAnswerField,
        "submissionTime": currentItem.submissionTime,
        "isFulfilled": false,
        "offerId": "",
    };

    wixData.update("support03", toUpdate)
        .then((results) => {
            console.log(results); //see item below
            wixLocation.to("https://cyberyeet123.wixsite.com/teachers-lounge/request/offers/" + currentItem._id);
        })
        .catch((err) => {
            console.log(err);
        });
}