let canvas;
let ctx;
canvas=document.getElementById("areaJuegos");
ctx=canvas.getContext("2d");
const ALTURA_SUELO =30;
const ALTURA_PERSONAJE =40;
const ANCHO_PERSONAJE =80;
const ALTURA_LIMON =40;
const ANCHO_LIMON =40;
let personajex = canvas.width/2-40
let limonX = canvas.width/2-40;
let limonY = 0;


function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
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
     actualizarPntalla();
   
}

function moverDerecha(){
    personajex=personajex+10;
    actualizarPntalla();
   
}

function refrescarPantalla(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
   
}

function dibujarLimon(){
    ctx.fillStyle="#61f527";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}
function bajarLimon(){
    limonY = limonY +10;
    actualizarPntalla();
    
}

function actualizarPntalla(){
    refrescarPantalla();
    dibujarPersonaje();
    dibujarSuelo();
    dibujarLimon();
}