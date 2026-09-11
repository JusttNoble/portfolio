document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("section"); 
        observer.observe(section);
    });
});


(function() {
    emailjs.init("5ilgxyQPF6gSEQBza"); // your public key
})();

function sendMail() {
  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

   
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let hasError = false;

   
    if (!email.includes("@")) {
    document.getElementById("emailError").style.color = "red";
    document.getElementById("emailError").textContent = "Invalid email address.";
    return;
    }
    if (name === "") {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").textContent = "Name is required.";
        hasError = true;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        hasError = true;
    }

    if (message === "") {
        document.getElementById("messageError").style.color = "red";
        document.getElementById("messageError").textContent = "Message cannot be empty.";
        hasError = true;
    }

   
    if (hasError) return;

   
    emailjs.send("service_3x1jn1q", "template_3b50iqe", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("messageError").style.color = "green";
        document.getElementById("messageError").textContent = "Email sent successfully!";
        document.querySelector("form").reset();
    }, function(error) {
        console.error("FAILED...", error);
        document.getElementById("messageError").style.color = "red";
        document.getElementById("messageError").textContent = "Failed to send email. Please try again.";
    });
}

