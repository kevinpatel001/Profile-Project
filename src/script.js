document.getElementById("resumeButton").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "../Kevin Patel Resume.pdf";  // Replace with your actual file path
    link.download = "Kevin Patel Resume.pdf";  // The name of the downloaded file
    link.click();     // Add your code here
});

function getFormData() {
    const form = document.getElementById("formdata");
    const formData = new FormData(form);

    // Extracting each form input value
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");


    const emailData = {
        subject: subject,
        from: email,
        to: "patelkevin.4874@gmail.com",
        body: message
    };

    console.log("emailData")
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    if (email && name && subject && message) {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    } else {
        console.log("Enter all data")
        return
    }

}


