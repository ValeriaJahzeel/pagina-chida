function esBlanco(entradaCampo){
    if(entradaCampo.value === ""){
        return true;
    }
    return false;
}

function estiloRojo(entrada){
    entrada.style.background = '#ffb8b8';
}

function estiloResert(entrada){
    entrada.style.backgroundColor = '#fff5f8';
}

let entradasRequeridas = document.querySelectorAll(".cajas");

var formulario = document.getElementById("formulario");

formulario.onsubmit = function (event){
    let error = false;

    for(let elemento of entradasRequeridas){
        if(esBlanco(elemento)){
            event.preventDefault();
            estiloRojo(elemento);
            error = true;
        }
        else{
            estiloResert(elemento);
        }
    }
}

formulario.onreset = function (event){
    for (let elemento of entradasRequeridas){
        estiloResert(elemento);
    }
}