class Cronometro {
    constructor() {

    }

    iniciaContagem() {
        console.log('Chamou o método');
        
        let minutos = 25;
        let segundos = 0;

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
        }, 1000)

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
        trocaBotao(btnPausaTimer, btnStartTimer, 'START');
        clearInterval(myInterval);
    }

}

/* Instâncias e variáveis */
const cronometro = new Cronometro();
const data = new Date();
let myInterval;

/* Elementos HTML selecionados */

let btnStartTimer = document.querySelector('#btn-start-timer');
let relogioVisor = document.querySelector('#timer');
let divBtnTimer = document.querySelector('#div-btn-timer');
let btnPausaTimer = document.createElement('button');


/* Captura de eventos */

btnStartTimer.addEventListener('click', () => cronometro.iniciaContagem());
btnPausaTimer.addEventListener('click', () => cronometro.pausa());



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
    
}