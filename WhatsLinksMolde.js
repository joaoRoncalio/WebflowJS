document.addEventListener('DOMContentLoaded', function () {
    var elementosWhatsApp = document.querySelectorAll('.box.svelte-lyhjhx'); // Ou use uma classe mais estável se possível
    var links = document.querySelectorAll('.link-whatsapp');

    links.forEach(function (link) {
        var toggleDisplay = function (event) {
            event.preventDefault();
            elementosWhatsApp.forEach(function (elemento) {
                var displayAtual = window.getComputedStyle(elemento).getPropertyValue('display');
                // Usando manipulação direta da propriedade
                if (displayAtual === 'none') {
                    elemento.style.display = 'flex'; // Ou 'block' se flex não for necessário
                } else {
                    elemento.style.display = 'none';
                }
            });
        };

        // Adicionando touchstart para melhor resposta em mobile
        link.addEventListener('touchstart', toggleDisplay);
        link.addEventListener('click', toggleDisplay);
    });
});
