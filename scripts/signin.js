const sign = document.getElementById('sign');
    sign.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Sign up successful! Proceed to login.');
        window.location.href = 'login.html';
});