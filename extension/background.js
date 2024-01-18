// Listener for messages from content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'CHECK_DNR') {
        let phoneNumber = message.phoneNumber;

        // Now, make an API call to your backend server to check if the phone number is in the DNR list.
        fetch(`YOUR_BACKEND_API_URL/checkPhone/${phoneNumber}`)
        .then(response => response.json())
        .then(data => {
            // Assuming your server responds with a JSON object that has a boolean field "isInDNR"
            if (data.isInDNR) {
                // If the phone number is in the DNR list, create a browser notification.
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'icons/icon48.png',
                    title: 'DNR Alert!',
                    message: `Phone number ${phoneNumber} is in the DNR list!`
                });
            }
        })
        .catch(error => {
            console.error("Error checking phone number against DNR:", error);
            // Handle the error appropriately, e.g., notify the user or log it for later analysis.
        });
    }
});
