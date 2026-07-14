const pinos = document.querySelectorAll(".pino");
let discoSelecionado = null;

function adicionaDisco(pino, tam){
    let disco = document.createElement("div");
    disco.setAttribute("tamanho", tam);
    disco.textContent = tam;
    pino.appendChild(disco);
}

function selecionaDisco(pino){
    if(discoSelecionado === null){
        discoSelecionado = pino.querySelector(":last-child");
        pino.removeChild(pino.lastChild);
        console.log("O disco " + discoSelecionado.textContent + " foi selecionado.");
    } else {
        console.log("discoSelecionado não null.")
    }
}

for(let i = 1; i <= 8; i++){
    adicionaDisco(pinos[0], i);
}

pinos[0].addEventListener("click", () => selecionaDisco(pinos[0]));
pinos[1].addEventListener("click", () => selecionaDisco(pinos[1]));
pinos[2].addEventListener("click", () => selecionaDisco(pinos[2]));