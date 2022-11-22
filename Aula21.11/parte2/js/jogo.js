var imagens = ['imgCircle','imgXis'];
var imgAtual = 0;
var matriz;

function criarMatriz() {
    matriz = new Array(3);

    for (var i = 0; i < 3; i++) {
        matriz[i] = new Array(3);
    }
}

function criarTabuleiro() {
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
    matriz[parseInt(vetIndices[0])][parseInt(vetIndices[1])] = imgAtual;
    (imgAtual >= 1) ? imgAtual = 0 : imgAtual++;

    checkGanhador();
}
checkGanhador(){
    
}