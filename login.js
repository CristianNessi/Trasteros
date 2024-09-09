document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulación de validación
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('authenticated', true);
        window.location.href = 'index.html'; // Redirige a la página principal
    } else {
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});