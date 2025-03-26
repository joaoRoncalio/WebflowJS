document.addEventListener('DOMContentLoaded', function () {
    console.log('[WhatsApp Toggle] DOMContentLoaded fired.'); // Check if script starts
    const visibleClassName = 'whatsapp-visible';
    const elementosWhatsApp = document.querySelectorAll('.box.svelte-lyhjhx.svelte-lyhjhx.svelte-lyhjhx');
    const links = document.querySelectorAll('.link-whatsapp');

    console.log(`[WhatsApp Toggle] Found ${elementosWhatsApp.length} elements to toggle.`); // Check selector
    console.log(`[WhatsApp Toggle] Found ${links.length} trigger links.`); // Check selector

    if (elementosWhatsApp.length === 0 || links.length === 0) {
        console.error('[WhatsApp Toggle] Critical: Missing elements or links. Aborting.');
        return;
    }

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            console.log('[WhatsApp Toggle] Link clicked!', event.target); // Check if click is detected
            event.preventDefault();
            elementosWhatsApp.forEach(function (elemento) {
                console.log(`[WhatsApp Toggle] Toggling class '${visibleClassName}' on element:`, elemento); // Check toggle attempt
                elemento.classList.toggle(visibleClassName);
            });
        });
    });
});
