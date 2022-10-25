function validar() {
    usuario = document.getElementById("user")
    pwd = document.getElementById("pwd")

    if (usuario.value == "") {
        alertWifi("Usuário em branco! Favor preenchê-lo",false, 0,"../img/toupeira.gif", 30);
        usuario.focus();
    }
    else if (pwd.value == "") {
        alertWifi("Senha em branco!", false, 0, "../img/toupeira.gif", 30);
        senha.focus();
    }
    else {
        alertWifi("Login válido. Uhullll", false, 0, "../img/toupeira.gif", 30);
    }
}