let listaDeNumerosSorteados=[];
let numeroLimite = 1000;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;
console.log(numSecreto)

function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    //{rate:1.2});
}


function exibirMensagemInicial(params) {
    textoNaTela('h1', 'Jogo do Número secreto');
    textoNaTela('p', 'Escolha um número entre 1 e 1000');
}


exibirMensagemInicial();


function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);

    if (numSecreto == chute) {
        textoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas>1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa}`
        textoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            if(chute > numSecreto){
                textoNaTela('p', 'O número secreto é menor');
            } else{
                textoNaTela('p', 'O número secreto é maior');
            }
            tentativas++
            limparCampo();
        }
    }


function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        // console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    exibirMensagemInicial();
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas= 1;
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
