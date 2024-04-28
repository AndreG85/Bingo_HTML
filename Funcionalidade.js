// Obtém referências para os elementos HTML relevantes
const qtdNumerosSelect = document.getElementById('qtdNumeros');
const botaoSortear = document.getElementById('botaoSortear');
const ultimoNumeroSpan = document.getElementById('ult_num');
const numerosSorteadosTextarea = document.getElementById('numSorteados');

// Adiciona logs de depuração para verificar se os elementos estão sendo selecionados corretamente
console.log('Elementos HTML:', qtdNumerosSelect, botaoSortear, ultimoNumeroSpan, numerosSorteadosTextarea);

// Array para armazenar os números sorteados
const numerosSorteados = [];

// Adiciona um ouvinte de eventos de clique ao botão de sorteio
botaoSortear.addEventListener('click', function() {
    console.log('Botão "Sortear" clicado!');

    // Obtém a quantidade de números selecionada pelo usuário
    const qtdNumeros = parseInt(qtdNumerosSelect.value);
    console.log('Quantidade de números selecionada:', qtdNumeros);

    // Realiza o sorteio de um número aleatório
    const numeroSorteado = sortearNumero(qtdNumeros);
    console.log('Número sorteado:', numeroSorteado);

    // Atualiza a interface com o último número sorteado
    if (ultimoNumeroSpan) {
        ultimoNumeroSpan.textContent = numeroSorteado;
    }

    // Adiciona o número sorteado ao array de números sorteados
    numerosSorteados.push(numeroSorteado);
    console.log('Números sorteados:', numerosSorteados);

    // Atualiza a lista de números sorteados na caixa de texto
    atualizarNumerosSorteados();
});

// Função para sortear um número aleatório dentro do intervalo especificado
function sortearNumero(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Função para atualizar a lista de números sorteados na caixa de texto
function atualizarNumerosSorteados() {
    if (numerosSorteadosTextarea) {
        numerosSorteadosTextarea.value = numerosSorteados.join(', ');
    }
}
