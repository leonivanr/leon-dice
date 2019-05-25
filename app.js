let secuencia = [];
let secuenciaJugador = [];
let luz;
let turnoCpu;
let ganador;
var contador = 0;


const contadorRacha = document.querySelector('#contador');
const racha = document.querySelector('#racha');
const jugarBtn = document.querySelector('#jugar');
jugarBtn.addEventListener('click', comenzar);
const botones = Array.from(document.querySelectorAll('.casillas'));
const activarBotones = () => botones.forEach(boton => boton.addEventListener('click', clickFn));
const pausarBotones = () => botones.forEach(boton => boton.removeEventListener('click', clickFn));



function clickFn(e) {
    pausarBotones();
    let botonPresionado = e.target.id;
    const clip = document.querySelector('#' + botonPresionado + '-snd');
    clip.play();
    const boton = document.querySelector('#' + botonPresionado);
    boton.style.cursor = 'pointer';
    boton.classList.toggle(botonPresionado + '-click');
    setTimeout(() => {
        boton.classList.toggle(botonPresionado + '-click');
        activarBotones();
    }, 700);
    contador++;
    
    racha.innerHTML = contador;
}

function comenzar() {
    botones.forEach(boton => boton.style.cursor = 'pointer')
    activarBotones();
    const boton = document.querySelector('#jugar');
    boton.style.display = 'none';
    contadorRacha.style.display = 'block';
}