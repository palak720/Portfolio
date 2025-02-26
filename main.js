/*var typed =new typed("text",{
    strings:["Frontend Developer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})*/

  
/* js for navbar toggle*/
const menubtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    document.querySelector('.menu-btn').addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('active');
    });
    
/* skills section*/
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".progress-line span").forEach(span => {
        span.style.width = span.parentElement.classList.contains('html') ? "90%" :
                          span.parentElement.classList.contains('css') ? "85%" :
                          span.parentElement.classList.contains('javaScript') ? "75%" :
                          span.parentElement.classList.contains('react') ? "70%" :
                          "80%"; // Default for GitHub
    });

    document.querySelectorAll(".path").forEach(path => {
        path.style.strokeDashoffset = path.classList.contains('path-1') ? "251" :
                                      path.classList.contains('path-2') ? "175" :
                                      path.classList.contains('path-3') ? "200" :
                                      "175"; // Default for Solo Work
    });
});

/* contact form*/

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // STOP form from refreshing

        console.log("Form submitted!"); // Debugging log

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const successMessage = document.getElementById("success-message");

        // Validate form fields
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Show success message
        successMessage.style.display = "block";

        // Clear form fields
        contactForm.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
});