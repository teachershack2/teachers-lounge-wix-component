import wixWindow from 'wix-window';
import wixData from 'wix-data';

var currentItem = null;
$w.onReady(function () {
    let received = wixWindow.lightbox.getContext();
    currentItem = received.currentItem
    $w('#itemText').text = currentItem.shortAnswerField2

});

export function submitOffer(event) {
    // Save submitted address
    let toInsert = {
        "email": $w('#emailInput').value,
        "meetingAddressProposed": $w('#addressInput').value,
        "offererName": $w('#nameInput').value,
        "requestReference": currentItem._id,
    };

    wixData.insert("offersCollection", toInsert)
        .then((item) => {
            console.log(item); //see item below

            $w('#group1').show()
        })
        .catch((err) => {
            console.log(err);
        });

}