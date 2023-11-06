let listaDeNumerosSorteados = [];
let tamanhoLista = 3
let numeroSecreto = GerarNumeroAleatorio();

function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

ExibirTextoNaTela('h1','Jogo do número secreto');
ExibirTextoNaTela('p',`Escolha um número entre 1 a ${tamanhoLista}:`);

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        ExibirTextoNaTela('h1', 'Acertou!')
        ExibirTextoNaTela('p', 'Você descobriu o número secreto!')
        document.getElementById('reiniciar').removeAttribute
        ('disabled');
    } else {
        if (chute > numeroSecreto) {
            ExibirTextoNaTela('p', 'O número secreto é menor')
        } else {
            ExibirTextoNaTela('p', 'O número secreto é maior')
        }
        limparCampo()
    }
}

function GerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * tamanhoLista + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == tamanhoLista) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return GerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    ExibirTextoNaTela('h1','Jogo do número secreto');
    ExibirTextoNaTela('p','Escolha um número entre 1 a 10:');
    document.getElementById('reiniciar').setAttribute('disabled',true)
}