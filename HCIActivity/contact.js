document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const statusMessage = document.getElementById("statusMessage");

    // Event Listener for Button Click
    submitBtn.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            // Dynamically update content using innerHTML
            statusMessage.innerHTML = "Thank you, " + name + "! Your message has been sent.";
            
            // Clear form fields
            document.getElementById("contactForm").reset();
        } else {
            statusMessage.innerHTML = "Please fill in all fields before submitting.";
            statusMessage.style.color = "red";
        }
    });

    // Button hover interaction using addEventListener
    submitBtn.addEventListener("mouseover", function () {
        submitBtn.style.backgroundColor = "#FFD700";  // Lighter orange
    });

    submitBtn.addEventListener("mouseout", function () {
        submitBtn.style.backgroundColor = "#FFA500";  // Default orange
    });
});
