window.onload = function() {
    // Espera 2 segundos antes de exibir o conteúdo principal
    setTimeout(function() {
        document.getElementById("intro").style.display = "none"; // Esconde a tela de introdução
        document.getElementById("conteudo").classList.remove("hidden"); // Mostra o conteúdo principal
    }, 2000); // Tempo de espera em milissegundos
};

// Script para alternar o menu hamburguer
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Alterna a classe 'active' para mostrar/esconder o menu
});
