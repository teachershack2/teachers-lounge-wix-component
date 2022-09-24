// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { authentication, currentMember } from 'wix-members';
import wixWindow from 'wix-window';

$w.onReady(function () {
    var currentItem = $w('#dynamicDataset').getCurrentItem()

    currentMember.getMember().then((memberInfo) => {
        if (currentItem.userReference == memberInfo._id) {
            $w('#editButton').show()
        }
    })

    $w('#posterName').text = "Posted by: " + currentItem.firstName + " " + currentItem.lastName

    $w('#textSchool').text = "School: " + currentItem.shortAnswerField

});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function donateButton(event) {
    var currentItem = $w('#dynamicDataset').getCurrentItem()

    wixWindow.openLightbox("Offer Donation", {
        "currentItem": currentItem,
    })
}