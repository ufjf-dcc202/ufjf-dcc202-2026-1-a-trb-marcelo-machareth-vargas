const pinos = document.querySelectorAll(".pino");

function adicionaDisco(pino, tam){
    let disco = document.createElement("div");
    disco.setAttribute("tamanho", tam);
    pino.appendChild(disco);
}

for(let i = 1; i <= 8; i++){
    adicionaDisco(pinos[0], i);
}