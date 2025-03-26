document.addEventListener('DOMContentLoaded', function () {
    // 1. Seleção de Elementos (com verificação)
    const elementosWhatsApp = document.querySelectorAll('.box.svelte-lyhjhx');
    const links = document.querySelectorAll('.link-whatsapp');

    // 2. Função para Alternar a Exibição
    const toggleDisplay = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do link

        // Verificação se os elementos existem antes de manipular
        if (elementosWhatsApp && elementosWhatsApp.length > 0) {
            elementosWhatsApp.forEach(elemento => {
                const displayAtual = window.getComputedStyle(elemento).getPropertyValue('display');
                // Manipulação direta do estilo (mais compatível)
                elemento.style.display = displayAtual === 'none' ? 'flex' : 'none';
            });
        } else {
            console.warn('Elementos .box.svelte-lyhjhx não encontrados.');
        }
    };

    // 3. Adição de Event Listeners (com touchstart)
    if (links && links.length > 0) {
        links.forEach(link => {
            // Use touchstart para melhor resposta em dispositivos móveis
            link.addEventListener('touchstart', toggleDisplay, { passive: false });
            // Use click como fallback
            link.addEventListener('click', toggleDisplay);
        });
    } else {
        console.warn('Elementos .link-whatsapp não encontrados.');
    }
});
