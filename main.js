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
/* resume download*/

document.getElementById("resumeLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action

    // Open resume in new tab
    window.open("images/PalakKasaudhan-FrontendDeveloper(React)-iEDm.pdf", "_blank");

    // Force download
    let a = document.createElement("a");
    a.href = "images/PalakKasaudhan-FrontendDeveloper(React)-iEDm.pdf";
    a.download = "PalakKasaudhan-FrontendDeveloper(React)-iEDm.pdf"; // Set download file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

/* toggle and hide navbar*/
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");

    // Toggle menu visibility
    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("open");
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("open");
        });
    });
});
