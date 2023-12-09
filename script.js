document.addEventListener('DOMContentLoaded', function () {
    const trackButton = document.getElementById('track-button');
    const bus = document.getElementById('bus');

    // Flag to check if the notification has been shown
    let notificationShown = false;

    // Function to enable the TRACK button and move the bus
    function enableTrackButton() {
        // Enable the button for tracking
        trackButton.disabled = false;

        trackButton.addEventListener('click', function () {

            // Move the bus by adding a class or directly applying styles
            bus.classList.add('moving'); // Add a class for moving (see the CSS below)
        });
    }

    // Function to display a pop-up message for turning on location services
    function showLocationPrompt() {
        if (!notificationShown) {
            alert('To use the bus tracking system, please turn on your location services.');
            notificationShown = true; // Set the flag to true after showing the notification
        }
    }

    // Invoke the function after a delay (e.g., 3 seconds)
    setTimeout(showLocationPrompt, 3000);

    // Check if the Geolocation API is supported by the browser
    if ('geolocation' in navigator) {
        // Function to handle location permission
        function handleLocationPermission(position) {
            // Your logic for handling location permission goes here
            // For now, just enable the TRACK button
            enableTrackButton();
        }

        // Ask for location permission
        navigator.geolocation.getCurrentPosition(handleLocationPermission);
    } else {
        // Handle the case where Geolocation is not supported
        console.error('Geolocation is not supported by this browser.');
    }
});
