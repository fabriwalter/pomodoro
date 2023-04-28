class Cronometro {
    constructor() {

    }

    iniciaContagem() {
        console.log('Chamou o método');
        startCronometro()
        trocaBotao(btnStartTimer, btnPausaTimer, 'PAUSE');
    }


    iniciaFolgaCurta() {
        console.log('Iniciei a folga');
    }

    iniciaFolgaLonga() {
        console.log('Iniciei a folga longa!');
    }





    pausa() {
        console.log('Pausei o relógio');
        trocaBotao(btnPausaTimer, btnContinuaTimer, 'START');
        clearInterval(myInterval);
    }


    continuaContagem(min, sec) {
        console.log('Iremos continuar a contagem!')
        minutos = min;
        segundos = sec;
        startCronometro()
        trocaBotao(btnContinuaTimer, btnPausaTimer, 'PAUSE');
    }

}

/* Instâncias e variáveis */
const cronometro = new Cronometro();
const data = new Date();
let myInterval;
let minutos = 25;
let segundos = 0;

/* Elementos HTML selecionados */

let btnStartTimer = document.querySelector('#btn-start-timer');
let relogioVisor = document.querySelector('#timer');
let divBtnTimer = document.querySelector('#div-btn-timer');
let btnPausaTimer = document.createElement('button');
let btnContinuaTimer = document.createElement('button');

let btnPomodoro = document.querySelector('#btnPomodoro');
let btnShortBreak = document.querySelector('#btnShortBreak');
let btnLongBreak = document.querySelector('#btnLongBreak');



/* Captura de eventos */

btnStartTimer.addEventListener('click', () => cronometro.iniciaContagem());
btnPausaTimer.addEventListener('click', () => cronometro.pausa());
btnContinuaTimer.addEventListener('click', () => cronometro.continuaContagem(minutos, segundos));


btnPomodoro.addEventListener('click', () => {
    minutos = 25;
    segundos = 0;

    timer.innerHTML = '25:00';

    if(btnShortBreak.classList.contains('selected-btn')) {
        btnShortBreak.classList.remove('selected-btn');
        btnPomodoro.classList.add('selected-btn');
    } else if (btnLongBreak.classList.contains('selected-btn')) {
        btnLongBreak.classList.remove('selected-btn');
        btnPomodoro.classList.add('selected-btn');
    }
});

btnShortBreak.addEventListener('click', () => {
    minutos = 5;
    segundos = 0;

    timer.innerHTML = '05:00';
    
    if(btnPomodoro.classList.contains('selected-btn')) {
        btnPomodoro.classList.remove('selected-btn');
        btnShortBreak.classList.add('selected-btn');
    } else if (btnLongBreak.classList.contains('selected-btn')) {
        btnLongBreak.classList.remove('selected-btn');
        btnShortBreak.classList.add('selected-btn');
    }

});

btnLongBreak.addEventListener('click', () => {
    minutos = 15;
    segundos = 0;

    timer.innerHTML = '15:00';

    if(btnPomodoro.classList.contains('selected-btn')) {
        btnPomodoro.classList.remove('selected-btn');
        btnLongBreak.classList.add('selected-btn');
    } else if (btnShortBreak.classList.contains('selected-btn')) {
        btnShortBreak.classList.remove('selected-btn');
        btnLongBreak.classList.add('selected-btn');
    }
        
});


/* Funções */

function adicionaZero(numero) {
    if (numero < 10) {
        numero = "0" + numero;
    }
    return numero;
}


function mostraHora(minutos, segundos) {
    data.setMinutes(minutos);
    data.setSeconds(segundos);
    let cronometro = `${adicionaZero(data.getMinutes())}:${adicionaZero(data.getSeconds())}`; 
    relogioVisor.innerHTML = cronometro;
}

function trocaBotao(botaoInicial, botaoFinal, conteudo) {
    botaoInicial.remove()
    botaoFinal.innerHTML = conteudo;
    botaoFinal.className = 'btn btn-light btn-start-timer';
    divBtnTimer.appendChild(botaoFinal);
}

function startCronometro() {
    myInterval = setInterval(function() {
        /* Lógica para os minutos e segundos */
        if (segundos == 0) {
            minutos = minutos - 1;
            segundos = 60;
            segundos = segundos - 1;
        } else {
            segundos = segundos - 1;
        }


        /* Acabou o tempo */
        if (minutos == 0 && segundos == 0) {
            clearInterval(myInterval);
        }


        mostraHora(minutos, segundos);
    }, 1000);
}