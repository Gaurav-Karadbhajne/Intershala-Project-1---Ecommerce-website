// Function to dynamically inject the header into the page
function injectHeader() {
    $("#header").load("header.html");
}

// Function to dynamically inject the footer into the page
function injectFooter() {
    $("#footer").load("footer.html");
}

// Call the functions to inject header and footer when the page loads
$(document).ready(function() {
    injectHeader();
    injectFooter();
});
