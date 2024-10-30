document.getElementById("resumeButton").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "../Kevin Patel Resume.pdf";  // Replace with your actual file path
    link.download = "Kevin Patel Resume.pdf";  // The name of the downloaded file
    link.click();     // Add your code here
});
