import wixWindow from 'wix-window';
import wixData from 'wix-data';

$w.onReady( function () {
  let received = wixWindow.lightbox.getContext();
  var currentItem = received.currentItem
  $w('#itemText').text = currentItem.longAnswerField
  
});

export function submitOffer(event) {
	// Save submitted address


}