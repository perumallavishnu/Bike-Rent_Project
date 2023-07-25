function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve stored users from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user in the array
    var user = users.find(function(u) {
        return u.username === username && u.password === password;
    });

    if (user) {
        alert("Login successful!");
      // Redirect to the profile page
        window.location.href = "profile.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}