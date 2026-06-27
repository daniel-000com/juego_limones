let canvas;
let ctx;
canvas=document.getElementById("areaJuegos");
ctx=canvas.getContext("2d");
const ALTURA_SUELO =30;
const ALTURA_PERSONAJE =40;
const ANCHO_PERSONAJE =80;

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
    ctx.fillRect(canvas.width/2-40,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}