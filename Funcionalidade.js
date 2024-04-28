// Obtém referências para os elementos HTML relevantes
const qtdNumerosSelect = document.getElementById('qtdNumeros');
const botaoSortear = document.getElementById('botaoSortear');
const ultimoNumeroSpan = document.getElementById('ult_num');
const numerosSorteadosOl = document.getElementById('numerosSorteadosOl');

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

    // Desativa a caixa de seleção de quantidade de números
    qtdNumerosSelect.disabled = true;
});

// Função para sortear um número aleatório dentro do intervalo especificado
function sortearNumero(max) {
    const numeroSorteado = Math.floor(Math.random() * max) + 1;
    if (!numerosSorteados.includes(numeroSorteado)) {
      return numeroSorteado;
    } else {
      console.log('Número já sorteado. Tente novamente.');
      return sortearNumero(max);
    }
}

// Função para atualizar a lista de números sorteados na caixa de texto
function atualizarNumerosSorteados() {
    if (numerosSorteadosOl) {
      numerosSorteadosOl.innerHTML = '';
      const numerosSorteadosString = numerosSorteados.sort((a, b) => a - b).join(', ');
      const span = document.createElement('span');
      span.textContent = numerosSorteadosString;
      numerosSorteadosOl.appendChild(span);
    }
}

// Caixa de diálogo ao apertar F5
window.onbeforeunload = function() {
    return 'Tem certeza que deseja atualizar a página e reiniciar seu sorteio?';
  };

// Ao carregar a página reativar a caixa de seleção de quantidade de números
window.addEventListener('load', function() {
    qtdNumerosSelect.disabled = false;
});