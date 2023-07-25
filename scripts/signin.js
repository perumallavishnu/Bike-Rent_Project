// Function to validate if the password meets the criteria
function isValidPassword(password) {
    // Regex to check if the password contains at least one lowercase letter,
    // one uppercase letter, one digit, and one special character.
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
}

function signUp() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;

    if (!isValidPassword(password)) {
        alert('Password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one digit, and one special character.');
        return;
    }
    // Retrieve stored users from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Create a new user object
    var user = {
        username: username,
        password: password,
        mobile: mobile
    };
    // find the username is existed or not
    for(const user of users){
        if(user.username === username){
            alert('Username already exists. Please choose different username.');
            return;
        }
    }

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