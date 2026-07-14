const pinos = document.querySelectorAll(".pino");
const lista = document.querySelector("#listaJogadas");
const ilustraDiscoSelecionado = document.querySelector(".discoSelecionado");
const botaoRepetir = document.querySelector("#repetirJogadas");
let repeticaoEmAndamento = false;
let discoSelecionado = null;

function adicionaDisco(pino, tam){
    let disco = document.createElement("div");
    disco.setAttribute("tamanho", tam);
    disco.textContent = tam;
    pino.appendChild(disco);
}

function selecionaDisco(pino){
    discoSelecionado = pino.querySelector(":last-child");
    pino.removeChild(pino.lastChild);
    ilustraDiscoSelecionado.appendChild(discoSelecionado);
}

function registraJogada(pino){
    let li = document.createElement("li");
    li.setAttribute("disco",discoSelecionado.getAttribute("tamanho"));
    if(pino === pinos[0]){
        li.setAttribute("pino",1);
    }
    if(pino === pinos[1]){
        li.setAttribute("pino",2);
    }
    if(pino === pinos[2]){
        li.setAttribute("pino",3);
    }
    li.textContent = "Disco " + li.getAttribute("disco") + " movido para pino " + li.getAttribute("pino");
    lista.appendChild(li);
}

function realizaJogada(pino){
    if(discoSelecionado != null){   
        if(pino.querySelector(":last-child") === null || pino.querySelector(":last-child").getAttribute("tamanho") < discoSelecionado.getAttribute("tamanho")){
            pino.appendChild(discoSelecionado);
            registraJogada(pino);
            discoSelecionado = null;
        }
    }
}

function repeteJogadas(){
    repeticaoEmAndamento = true;
    pinos.forEach((pino, indice) => {
        while(pino.firstChild != null){
            pino.removeChild(pino.firstChild);
        }
        pino.textContent = "pino " + (indice + 1);
    });
    inicializaPino1();
    discoSelecionado = null;
    let jogadas = Array.from(lista.children);
    jogadas.forEach((jogada, indice) => {
        setTimeout(() => {
        jogada.style.color = "red";
        let tam = jogada.getAttribute("disco");
        if(tam === "1"){
            discoSelecionado = document.querySelector("[tamanho='1']");
        }
        if(tam === "2"){
            discoSelecionado = document.querySelector("[tamanho='2']");
        }
        if(tam === "3"){
            discoSelecionado = document.querySelector("[tamanho='3']");
        }
        if(tam === "4"){
            discoSelecionado = document.querySelector("[tamanho='4']");
        }
        if(tam === "5"){
            discoSelecionado = document.querySelector("[tamanho='5']");
        }
        if(tam === "6"){
            discoSelecionado = document.querySelector("[tamanho='6']");
        }
        if(tam === "7"){
            discoSelecionado = document.querySelector("[tamanho='7']");
        }
        if(tam === "8"){
            discoSelecionado = document.querySelector("[tamanho='8']");
        }
        let pino = jogada.getAttribute("pino");
        if(pino === "1"){
            pinos[0].appendChild(discoSelecionado);
        }
        if(pino === "2"){
            pinos[1].appendChild(discoSelecionado);
        }
        if(pino === "3"){
            pinos[2].appendChild(discoSelecionado);
        }
        setTimeout(() => {jogada.style.color = "black";}, 1000);
        }, (indice+1)*1000)
    })
    setTimeout(() => {repeticaoEmAndamento = false;}, jogadas.length * 1000);
}

function inicializaPino1(){
    for(let i = 1; i <= 8; i++){
        adicionaDisco(pinos[0], i);
    }
}


pinos.forEach((pino) => {pino.addEventListener("click", (e) => {e.stopPropagation();
    if(repeticaoEmAndamento){
        return;
    }
    if(discoSelecionado === null){
        if (pino.lastElementChild != null){
            selecionaDisco(pino);
        }
    } else{
        realizaJogada(pino);
        }
    });
});

botaoRepetir.addEventListener("click",repeteJogadas);

inicializaPino1();