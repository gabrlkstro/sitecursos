document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}