const pinos = document.querySelectorAll(".pino");
const lista = document.querySelector("ol");
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

function registraJogada(pino){
    let li = document.createElement("li");
    li.setAttribute("disco",discoSelecionado.getAttribute("tamanho"));
    if(pino == pinos[0]){
        li.setAttribute("pino",1);
    }
    if(pino == pinos[1]){
        li.setAttribute("pino",2);
    }
    if(pino == pinos[2]){
        li.setAttribute("pino",3);
    }
    li.textContent = "Disco " + li.getAttribute("disco") + " movido para pino " + li.getAttribute("pino");
    lista.appendChild(li);
}

for(let i = 1; i <= 8; i++){
    adicionaDisco(pinos[0], i);
}

pinos[0].addEventListener("click", () => selecionaDisco(pinos[0]));
pinos[1].addEventListener("click", () => selecionaDisco(pinos[1]));
pinos[2].addEventListener("click", () => selecionaDisco(pinos[2]));