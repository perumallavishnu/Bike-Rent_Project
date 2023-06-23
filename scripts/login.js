const login = document.getElementById('login');
login.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) 
    {
            window.location.href = 'profile.html';
    } 
    else 
    {
        alert('Login failed!');
    }
});