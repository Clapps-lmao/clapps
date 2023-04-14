// Check the initial user agent
var userAgent = navigator.userAgent;

// Listen for user agent changes
window.addEventListener("useragentchanged", function() {
  // Get the new user agent
  var newUserAgent = navigator.userAgent;

  // Check if the user agent has changed
  if (userAgent !== newUserAgent) {
    // Redirect to the unsupported page
    window.location.href = "https://clapps.lol/unsupported";
  }
});

// Function to check for user agent changes every 1 second
setInterval(function() {
  // Get the current user agent
  var currentUserAgent = navigator.userAgent;

  // Check if the user agent has changed
  if (userAgent !== currentUserAgent) {
    // Dispatch the useragentchanged event
    var event = new Event("useragentchanged");
    window.dispatchEvent(event);

    // Update the user agent variable
    userAgent = currentUserAgent;
  }
}, 500);
