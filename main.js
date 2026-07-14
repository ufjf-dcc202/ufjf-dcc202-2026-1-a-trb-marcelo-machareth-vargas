const pinos = document.querySelectorAll(".pino");
const lista = document.querySelector("#listaJogadas");
const ilustraDiscoSelecionado = document.querySelector(".discoSelecionado");
const botaoRepetir = document.querySelector("#repetirJogadas");
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

function realizaJogada(pino){
    if(discoSelecionado != null){   
        if(pino.querySelector(":last-child") === null || pino.querySelector(":last-child").getAttribute("tamanho") < discoSelecionado.getAttribute("tamanho")){
            pino.appendChild(discoSelecionado);
            registraJogada(pino);
            discoSelecionado = null;
        }

    }
}

for(let i = 1; i <= 8; i++){
    adicionaDisco(pinos[0], i);
}

pinos.forEach((pino) => {pino.addEventListener("click", (e) => {e.stopPropagation();
    if(discoSelecionado === null){
        if (pino.lastElementChild != null){
            selecionaDisco(pino);
        }
    } else{
        realizaJogada(pino);
        }
    });
});