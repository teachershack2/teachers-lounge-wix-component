import wixWindow from 'wix-window';
import wixData from 'wix-data';
import wixLocation from 'wix-location';

var currentItem = null;

$w.onReady(function () {
    let received = wixWindow.lightbox.getContext();
    currentItem = received.currentItem
    $w('#itemText').text = "Your request for " + currentItem.shortAnswerField2 + " has been updated."

});

export function LinkToPost(event) {
	 wixLocation.to("/request/" + currentItem._id);
}