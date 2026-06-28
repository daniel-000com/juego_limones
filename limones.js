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
let personajeY = canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX = canvas.width/2-40;
let limonY = 0;
let puntaje=0;
let vidas=5;
let velocidaCaida=200;



function iniciar(){
    interval=setInterval(bajarLimon,velocidaCaida)
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}

function dibujarSuelo(){
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}
function dibujarPersonaje(){
    ctx.fillStyle="#F5A327";
    ctx.fillRect(personajex,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajex=personajex-10;
     actualizarPantalla();   
}

function moverDerecha(){
    personajex=personajex+10;
    actualizarPantalla(); 
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
    actualizarPantalla();
    detectarColicion();
    detectarPiso();
}

function actualizarPantalla(){
    refrescarPantalla();
    dibujarPersonaje();
    dibujarSuelo();
    dibujarLimon(); 
}
function detectarColicion(){
    if(limonX+ANCHO_LIMON>personajex && limonX < personajex+ANCHO_PERSONAJE && limonY+ALTURA_LIMON>personajeY && limonY < personajeY+ALTURA_PERSONAJE){
        aparecerLimon();
        puntaje=puntaje +1;
        mostrarSpam("txtPuntaje",puntaje);
        
        }
}
function probarAleatorio9(){
    let aleatorio=generaAleatorio(10,80);
    console.log (aleatorio);
}
function aparecerLimon(){
    limonX=generaAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}
function detectarPiso(){
    if(limonY+ALTURA_LIMON==canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas=vidas - 1;
        mostrarSpam("txtVidas",vidas);
    }
    

}