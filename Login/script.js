// 1 Lembrete -  Função para validar o login
function login() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> dev
    if (nome === "admin" && senha === "1234") {
        alert("Login bem-sucedido!");
=======
    if (nome === "admin" && senha === "1234") {
        window.location.href = "../loja/loja.html"
>>>>>>> origin/dev
    } else {
        document.getElementById("error-modal").style.display = "block";
    }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/dev
>>>>>>> dev
// 2 Lembrete - Função para fechar o modal de erro
function fecharError() {
    document.getElementById("error-modal").style.display = "none";
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/dev
>>>>>>> dev
// 3 Lembrete - Função para mostrar ou ocultar a senha
function showPassword() {
    var senhaInput = document.getElementById("senha");
    
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> origin/dev
>>>>>>> dev
