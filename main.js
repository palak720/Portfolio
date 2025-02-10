/*var typed =new typed("text",{
    strings:["Frontend Developer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})*/
// Initialize EmailJS with your Public Key
emailjs.init('YOUR_PUBLIC_KEY');

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = this;

  // Send the form data using EmailJS
  emailjs.sendForm('service_5v63rlv', 'template_cuj094c', form)
    .then(() => {
      // Show success message
      document.getElementById('success-message').textContent = "Message sent successfully!";
      document.getElementById('success-message').style.display = "block";

      // Clear the form
      form.reset();
    }, (error) => {
      console.error('Failed to send the message:', error);
      document.getElementById('success-message').textContent = "Failed to send the message. Please try again.";
      document.getElementById('success-message').style.display = "block";
    });
});
