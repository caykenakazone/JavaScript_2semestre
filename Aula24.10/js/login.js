function validar() {
    usuario = document.getElementById("user").value
    senha = document.getElementById("senha").value

    if (usuario == "") {
        alert("Usuário em branco")
    }
    if (senha == "") {
        alert("Senha em branco")
    }
    if (usuario != "" && senha != "") {
        alert("Sucesso")
    }
}