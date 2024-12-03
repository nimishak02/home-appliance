
  // Initialize EmailJS
  emailjs.init("Lwpo5amekPhGpf0f2"); // Replace with your EmailJS public key

  function sendEmail() {
    const formData = {
      first_name: document.getElementById("firstName").value,
      last_name: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_02nims", "template_k8xiya9", formData)
      .then(() => {
        document.getElementById("responseMessage").innerHTML =
          '<p class="text-success">Message sent successfully!</p>';
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        document.getElementById("responseMessage").innerHTML =
          '<p class="text-danger">Failed to send message. Please try again.</p>';
        console.error("Error:", error);
      });
  }