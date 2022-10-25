function validar() {
    usuario = document.getElementById("user")
    senha = document.getElementById("senha")

    if (usuario.value == "") {
        alert("Usuário em branco");
        usuario.focus();
    }
    else if (senha.value == "") {
        alert("Senha em branco");
        senha.focus();
    }
    else {
        alert("Sucesso")
    }
}