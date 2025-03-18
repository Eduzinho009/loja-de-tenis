// 1 Lembrete -  Função para validar o login
function login() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if (nome === "admin" && senha === "1234") {
        alert("Login bem-sucedido!");
    } else {
        document.getElementById("error-modal").style.display = "block";
    }
}

// 2 Lembrete - Função para fechar o modal de erro
function fecharError() {
    document.getElementById("error-modal").style.display = "none";
}

// 3 Lembrete - Função para mostrar ou ocultar a senha
function showPassword() {
    var senhaInput = document.getElementById("senha");
    
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}
