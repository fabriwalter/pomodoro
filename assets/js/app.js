class Cronometro {
    constructor() {
        this.valorInicial
    }

    iniciaContagem() {
        console.log('Chamou o método');
        relogioVisor.innerHTML = '';
    }

    iniciaFolgaCurta() {
        console.log('Iniciei a folga');
    }

    iniciaFolgaLonga() {
        console.log('Iniciei a folga longa!');
    }

    pausa() {
        console.log('Pausei o relógio');
    }

}

const cronometro = new Cronometro();

let btnStartTimer = document.querySelector('#btn-start-timer');
let relogioVisor = document.querySelector('#timer');

btnStartTimer.addEventListener('click', () => cronometro.iniciaContagem());