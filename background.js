// Mock DNR list
const DNRList = ['123-456-7890', '234-567-8901']; // Add any sample phone numbers here.

// Listening for messages from content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'CHECK_DNR') {
        const isOnDNR = DNRList.includes(message.phoneNumber);

        if (isOnDNR) {
            // Here, you can take any action you'd like. For example:
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'icon48.png',
                title: 'DNR Alert!',
                message: `The guest with phone number ${message.phoneNumber} is on the DNR list!`
            });
        }
    }
});
