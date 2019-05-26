let secuencia = [1,3,2,4,3,2,4,1,2,3,1,2,3,1,4,2,3,2];
let secuenciaJugador = [];
let luz;
let ganador;
var contador = 0;


const contadorRacha = document.querySelector('#contador');
const racha = document.querySelector('#racha');
const jugarBtn = document.querySelector('#jugar');
const agregarSecuencia = () => Math.round(Math.random() * 3) + 1;
jugarBtn.addEventListener('click', turnoC(secuencia));
const botones = Array.from(document.querySelectorAll('.casillas'));
const activarBotones = () => botones.forEach(boton => boton.addEventListener('click', clickFn));
const pausarBotones = () => botones.forEach(boton => boton.removeEventListener('click', clickFn));

console.log(agregarSecuencia());

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

function s() {
    secuencia.forEach((pulsacion, index) => {
        setTimeout(() => {
            reproducirSonido(pulsacion);s
        }, 1000 * index);
})}

function turnoC(secuencia) {
    for (let i = 0; i < secuencia.length; i++) {
        setTimeout(function () {
            reproducirSonido(i+1);

        }, 1000)
    }
}

function reproducirSonido(pulsacion) {
    switch (pulsacion) {
        case 1:
            const verdeSnd = document.querySelector('#verde-snd');
            verdeSnd.play();
            console.log("verde");

            break;
        case 2:
            const rojoSnd = document.querySelector('#rojo-snd');
            rojoSnd.play();
            console.log("rojo");
            break;
        case 3:
            const amarilloSnd = document.querySelector('#amarillo-snd');
            amarilloSnd.play();
            console.log("amarillo");

            break;
        case 4:
            const azulSnd = document.querySelector('#azul-snd');
            azulSnd.play();
            console.log("azul");
            break;
        default:
            break;
    }
}

function addLuz(pulsacion) {
    switch (pulsacion) {
        case 1:
            const verdeLuz = document.querySelector('#verde');
            verdeLuz.classList.add('verde-click');
            console.log("Luz-verde");
            break;
        case 2:
            const rojoLuz = document.querySelector('#rojo');
            rojoLuz.classList.add('rojo-click');
            console.log("Luz-rojo");
            break;
        case 3:
            const amarilloLuz = document.querySelector('#amarillo');
            amarilloLuz.classList.add('amarillo-click');
            console.log("Luz-amarillo");
            break;
        case 4:
            const azulLuz = document.querySelector('#azul');
            azulLuz.classList.add('azul-click');
            console.log("Luz-azul");
            break;
        default:
            break;
    }
}

function disableLuz(pulsacion) {
    switch (pulsacion) {
        case 1:
            const verdeLuz = document.querySelector('#verde');
            verdeLuz.classList.remove('verde-click');
            console.log("Luz-verde");
            break;
        case 2:
            const rojoLuz = document.querySelector('#rojo');
            rojoLuz.classList.remove('rojo-click');
            console.log("Luz-rojo");
            break;
        case 3:
            const amarilloLuz = document.querySelector('#amarillo');
            amarilloLuz.classList.remove('amarillo-click');
            console.log("Luz-amarillo");
            break;
        case 4:
            const azulLuz = document.querySelector('#azul');
            azulLuz.classList.remove('azul-click');
            console.log("Luz-azul");
            break;
        default:
            break;
    }
}

//TODO:
//ADD:
//FIXME: