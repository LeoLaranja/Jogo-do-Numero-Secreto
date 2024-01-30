
function secretNumber() {
    return parseInt(Math.random() * 10 + 1);
}

let hidden = secretNumber()
let tentativas = 1
//let titulo = document.querySelector ('h1');
//titulo.innerHTML = "Jogo do Número Secreto";
//------------------------------------------------------

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//------------------------------------------------------


function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
exibirTexto('h1', "Jogo do Número Secreto");
exibirTexto('p', 'Escolha um número entre 1 e 10');


//--------------------------------------------------------


function verificarChute() {
    let kick = document.querySelector('input').value
    console.log(hidden);
    if (kick == hidden) {
        exibirTexto('h1', 'PARABÉNS!    VOCÊ ACERTOU!');
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} tentativa(s) `
        exibirTexto('P', mensagemTentativas);
        let img = document.querySelector('.container__imagem-pessoa');
        img.classList.add('display_none');
        let img2 = document.querySelector('.robo');
        img2.classList.add('display_flex');
        display();
    } else {
        if (kick > hidden) {
            exibirTexto('P', 'O número secreto é MENOR');

        } else {
            exibirTexto('P', 'O número secreto é MAIOR');
        }
    }
    tentativas++
    clean();
}

//--------------------------------------------------------

function clean() {
    kick = document.querySelector('input');
    kick.value = "";
}

//--------------------------------------------------------

function display() {
    let container__botao = document.getElementById('reiniciar');
    container__botao.removeAttribute("disabled");
}

//--------------------------------------------------------

function reiniciar() {
    exibirTexto('h1', "Jogo do Número Secreto");
    exibirTexto('p', 'Escolha um número entre 1 e 10');
    let img2 = document.querySelector('.robo');
    img2.classList.remove('display_flex');
    img2.classList.remove('display_none');
    let img = document.querySelector('.container__imagem-pessoa');
    img.classList.add('display_flex');
    img.classList.remove('display_none');
    tentativas = 1;
    hidden = secretNumber();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
