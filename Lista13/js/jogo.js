var imagens = ['imgXis', 'imgCircle'];
var imgAtual = 0;
var matriz;

function criarMatriz() {
    matriz = new Array(3);

    for (var i = 0; i < 3; i++) {
        matriz[i] = new Array(3);
    }
}

function criarTabuleiro() {
    document.getElementById("jog1").innerHTML = localStorage.getItem("jog1");
    document.getElementById("jog2").innerHTML = localStorage.getItem("jog2");
    criarMatriz();
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            var div = document.createElement("div");
            div.setAttribute("class", "boxTabuleiro imgTabuleiro");
            div.setAttribute("id", `${l}_${c}`)
            div.addEventListener("click", inserirImg)
            document.getElementById("tabuleiro").appendChild(div);
            matriz[l][c] = "";
        }
    }
}

function inserirImg(evento) {
    //document.getElementById(evento.currentTarget.id).style.backgroundColor = "red";
    
    //Att o tabuleiro
    document.getElementById(evento.currentTarget.id).classList.add(imagens[imgAtual]);
    
    //Att matriz do tab
    vetIndices = evento.currentTarget.id.split("_");
    matriz[parseInt(vetIndices[0])][parseInt(vetIndices[1])] = String(imgAtual);
    console.table(matriz);
    (imgAtual >= 1) ? imgAtual = 0 : imgAtual++;
    jogador1 = localStorage.getItem("jog1");
    jogador2 = localStorage.getItem("jog2");
    if (imgAtual == 0) {
        document.getElementById("vez").innerHTML = jogador1
        
    } else {
        document.getElementById("vez").innerHTML = jogador2
        
    }
    checkGanhador();
    
}
function checkGanhador() {
    possi = [("000"), ("111")]
    linha1 = matriz[0][0] + matriz[0][1] + matriz[0][2];
    if (linha1 == "000") alert("Jogador 1 Ganhou : Circulo");
    else if (linha1 == "111") alert("Jogador 2 Ganhou : Xis");
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {

        }
    }
}