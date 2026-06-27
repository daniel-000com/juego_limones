let canvas;
let ctx;
canvas=document.getElementById("areaJuegos");
ctx=canvas.getContext("2d");
const ALTURA_SUELO =30;
const ALTURA_PERSONAJE =40;
const ANCHO_PERSONAJE =80;
let personajex = canvas.width/2-40
function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}

function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}
function dibujarPersonaje(){
    ctx.fillStyle="#F5A327";
    ctx.fillRect(personajex,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajex=personajex-10;
    refrescarPantalla();
    dibujarPersonaje();
    dibujarSuelo();

}

function moverDerecha(){
    personajex=personajex+10;
    refrescarPantalla();
    dibujarPersonaje();
    dibujarSuelo();

}

function refrescarPantalla(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}