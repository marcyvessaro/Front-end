
function tocaSomLatido(){
    document.querySelector("#som_tecla_latido").play()
}

function tocaSomMiado(){
    document.querySelector("#som_tecla_miado").play()
}

function tocaSomRugido(){
    document.querySelector("#som_tecla_rugido").play()
}

function tocaSomPassaro(){
    document.querySelector("#som_tecla_passaro").play()
}

function tocaSomVaca(){
    document.querySelector("#som_tecla_vaca").play()
}

function tocaSomCavalo(){
    document.querySelector("#som_tecla_cavalo").play()
}

function tocaSomBaleia(){
    document.querySelector("#som_tecla_baleia").play()
}


document.querySelector(".tecla_latido").onclick = tocaSomLatido;
document.querySelector(".tecla_miado").onclick = tocaSomMiado;
document.querySelector(".tecla_rugido").onclick = tocaSomRugido;
document.querySelector(".tecla_passaro").onclick = tocaSomPassaro;
document.querySelector(".tecla_vaca").onclick = tocaSomVaca;
document.querySelector(".tecla_cavalo").onclick = tocaSomCavalo;
document.querySelector(".tecla_baleia").onclick = tocaSomBaleia;
