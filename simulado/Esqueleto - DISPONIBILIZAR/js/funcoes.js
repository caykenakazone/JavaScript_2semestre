var veiculos = [{
    imgVeiculo:"civic.jpg", fabricante: "Fabricante: Honda", nomeC: "Nome: Civic", potencia: "Potência: 150 cv", garantia: "Garantia: 3 anos", consumo: "Consumo: 9, 7 km / l"
}, {
    imgVeiculo: "troller.jpg", fabricante: "Fabricante: Jeep", nomeC: "Nome: Troller", potencia: "Potência: 190 cv", garantia: "Garantia: 3 anos", consumo: "Consumo: 7, 7 km / l"
}
]
function validaCampos() {
    nome = document.getElementById("nome").value
    idade = document.getElementById("idade").value
    passatempo = document.getElementById("passatempo").value


    var padrao = /^[A-Z][a-zA-Z ]{2,29}$/;

    if (!padrao.test(nome)) {
        alert("Nome invalido, informe um nome começando com letra maiusculo. Min= 3 Max = 30")
    } else if (idade < 1 || idade > 130) {
        alert("Idade Inválida, informe uma idade maior que 1 e menor que 130")
    } else if (passatempo == "-1") {
        alert("Informe um passatempo válido")
    } else {
        localStorage.setItem("nome", nome);
        localStorage.setItem("passatempo", passatempo);
        window.open("aguarde.html", "_self")
    }
}

function temporizador() {
    numAleat = parseInt((Math.random() * 6)) + 5;
    setTimeout(cronometro, 1000, numAleat);
}
function cronometro(numAleat) {
    if (numAleat <= 4) document.getElementById("tempo").style.color = "red";
    if (numAleat > "0") numAleat--
    else window.open("verVeiculo.html", "_self")
    document.getElementById("tempo").innerHTML = numAleat;
    setTimeout(cronometro, 1000, numAleat);

}


function carros() {
    
    nome = localStorage.getItem("nome");
    passatempo = parseInt(localStorage.getItem("passatempo"));
    document.getElementById("nomeUlt").innerHTML = nome

    document.getElementById("imgVeiculo".src = `../img/${veiculos[passatempo].imgVeiculo}`)
    document.getElementById("fabri").innerHTML = veiculos[passatempo].fabricante
    document.getElementById("marca").innerHTML = veiculos[passatempo].nomeC
    document.getElementById("pot").innerHTML = veiculos[passatempo].potencia
    document.getElementById("garant").innerHTML = veiculos[passatempo].garantia
    document.getElementById("cons").innerHTML = veiculos[passatempo].consumo


}
function mudarPerfil(){
    window.open("index.html","_self");
}
