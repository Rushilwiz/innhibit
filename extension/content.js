// Check if the current page is the Reservation Information page
// (You might need more specific conditions depending on the page structure.)
if (document.title.includes('Reservation Information')) {

    // Find the element containing the guest's phone number.
       const phoneNumberInput = document.querySelector('input[name="homePhone"]');

     if (phoneNumberInput && phoneNumberInput.value) {
        const phoneNumber = phoneNumberInput.value.trim();

        // Send the phone number to the background script for further processing.
        chrome.runtime.sendMessage({type: 'CHECK_DNR', phoneNumber: phoneNumber});
    }
}
