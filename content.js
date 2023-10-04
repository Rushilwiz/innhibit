// Check if the current page is the Reservation Information page
// (You might need more specific conditions depending on the page structure.)
if (document.title.includes('Reservation Information')) {

    // Find the element containing the guest's phone number.
    // This is a placeholder. You'll need to adjust this based on the actual structure of the webpage.
    const phoneNumberElement = document.querySelector('.phone-number-class');

    if (phoneNumberElement) {
        const phoneNumber = phoneNumberElement.textContent.trim();
        
        // Send the phone number to the background script for further processing.
        chrome.runtime.sendMessage({type: 'CHECK_DNR', phoneNumber: phoneNumber});
    }
}
