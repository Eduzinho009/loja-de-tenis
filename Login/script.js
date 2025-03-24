// 1 Lembrete - Função para validar o login
function login() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if (nome && senha && nome === "admin" && senha === "1234") {
        // aqui esta criando um objeto com os dados do usuário
        const user = {
            name: nome,
            dataEntrada: new Date().toISOString(), // Salvando data/hora exata
            id: Math.floor(Math.random() * 100000), // Gerando um ID aleatório
        };

        // Armazenando no localStorage
        localStorage.setItem("usuario", JSON.stringify(user));

        // Redirecionando para a loja
        window.location.href = "../loja/loja.html";
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
