function criarTabuleiro() {
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            var div = document.createElement("div");
            div.setAttribute("class", "boxTabuleiro");
            div.innerHTML = `Caixa ${l} ${c}`
            document.getElementById("tabuleiro").appendChild(div);
        }
    }
}