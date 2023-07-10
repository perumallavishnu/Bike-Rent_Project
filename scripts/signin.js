function signUp() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;

    // Retrieve stored users from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Create a new user object
    var user = {
        username: username,
        password: password,
        mobile: mobile
    };

    // Add the user object to the array
    users.push(user);

    // Store updated users array in local storage
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("mobile").value = "";

    alert("Sign up successful! Please login.");
    window.location.href = 'login.html';
}