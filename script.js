
document.getElementById("admissionForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("message").textContent =
        "Your inquiry has been submitted successfully!";

    this.reset();

});
