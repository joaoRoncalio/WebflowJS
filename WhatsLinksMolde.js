document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os elementos que devem ser exibidos ou ocultados
    const elementosWhatsApp = document.querySelectorAll('.box.svelte-lyhjhx');
    // Seleciona todos os links que devem acionar a exibição/ocultação
    const links = document.querySelectorAll('.link-whatsapp');

    // Verifica se os elementos foram encontrados
    if (elementosWhatsApp.length > 0 && links.length > 0) {
        // Adiciona um ouvinte de evento a cada link
        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Previne o comportamento padrão do link
                // Alterna o estado de exibição de cada elemento
                elementosWhatsApp.forEach(function (elemento) {
                    var displayAtual = window.getComputedStyle(elemento).getPropertyValue('display');
                    if (displayAtual === 'none') {
                        elemento.style.setProperty('display', 'flex', 'important');
                    } else {
                        elemento.style.setProperty('display', 'none', 'important');
                    }
                });
            });
        });
    } else {
        console.error('Elementos necessários não encontrados. Verifique o seletor CSS.');
    }
});
