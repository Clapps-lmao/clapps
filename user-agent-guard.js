document.addEventListener("DOMContentLoaded", function() {
  // Check the initial user agent and touch support
  var userAgent = navigator.userAgent;
  var touchSupport = navigator.maxTouchPoints > 0;

  // Listen for user agent or touch support changes
  window.addEventListener("useragentchanged", function() {
    // Get the new user agent and touch support
    var newUserAgent = navigator.userAgent;
    var newTouchSupport = navigator.maxTouchPoints > 0;

    // Check if the user agent or touch support has changed
    if (userAgent !== newUserAgent || touchSupport !== newTouchSupport) {
      // Redirect to the unsupported page
      window.location.href = "https://Clapps.lol/unsupported";
    }
  });

  // Function to check for user agent or touch support changes every 1 second
  setInterval(function() {
    // Get the current user agent and touch support
    var currentUserAgent = navigator.userAgent;
    var currentTouchSupport = navigator.maxTouchPoints > 0;

    // Check if the user agent or touch support has changed
    if (userAgent !== currentUserAgent || touchSupport !== currentTouchSupport) {
      // Dispatch the useragentchanged event
      var event = new Event("useragentchanged");
      window.dispatchEvent(event);

      // Update the user agent and touch support variables
      userAgent = currentUserAgent;
      touchSupport = currentTouchSupport;
    }
  }, 50);
});
