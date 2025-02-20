function validarLogin() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario.length < 3 || senha.length < 5) {
        alert("Usuário ou senha inválidos!");
        return false;
    }

    alert("Login realizado com sucesso!");
    return true;
}

function validarCadastro() {
    let email = document.getElementById("email").value;
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senhaCadastro").value;
    
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
        alert("Email inválido!");
        return false;
    }

    if (nome.length < 3) {
        alert("Nome muito curto!");
        return false;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return false;
    }

    alert("Cadastro realizado com sucesso!");
    return true;
}
