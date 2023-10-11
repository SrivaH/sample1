document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check username and password (you'd typically make an AJAX request to a server here)
    if (username === "Srivatsan" && password === "password") {
        // Successful login, redirect to dashboard or another page
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
