// Seleciona o botão de inversão de cores
const btnInverter = document.querySelector('.cabecalho-titulo-inversao');

// Adiciona o evento de clique ao botão
btnInverter.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no elemento <body>
    document.body.classList.toggle('dark-mode');
});