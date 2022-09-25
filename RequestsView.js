// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixLocation from 'wix-location';

$w.onReady(function () {
    $w('#dataset1').onReady(() => {
        $w("#repeater1").onItemReady(($w, itemData, index) => {
            $w('#textDesc').text = itemData.longAnswerField.substring(0, 60) + "..."

            var daysSinceRequest = Math.floor((Date.now() - itemData.submissionTime) / 1000 / 60 / 60 / 24)

            if (daysSinceRequest > 1) {
                $w("#textRequestTime").text = "Posted " + daysSinceRequest + " days ago"

            } else if (daysSinceRequest > 0) {
                $w("#textRequestTime").text = "Posted " + daysSinceRequest + " day ago"

            } else {
                $w("#textRequestTime").text = "Posted today"

            }

        })
    })

});

export function goToRequest(event) {
    var itemId = event.context.itemId

    // go to material request page
    wixLocation.to("/request/" + itemId);

}