document.addEventListener('DOMContentLoaded', function () {
    const hiddenClassName = 'hidden-by-whatsapp-toggle';
    const elementosWhatsApp = document.querySelectorAll('.box.svelte-lyhjhx.svelte-lyhjhx.svelte-lyhjhx');
    const links = document.querySelectorAll('.link-whatsapp');

    // Sanity checks... (keep them)
    if (elementosWhatsApp.length === 0) { /* ... */ return; }
    if (links.length === 0) { /* ... */ return; }

    // --- Set Initial State to Hidden via JS ---
    // Loop through all target elements and add the hidden class if it's not already there.
    elementosWhatsApp.forEach(function(elemento) {
        if (!elemento.classList.contains(hiddenClassName)) {
            elemento.classList.add(hiddenClassName);
        }
    });
    // Optional log: Indicate that initial state was set
    // console.log(`[WhatsApp Toggle (CSS Class)] Applied initial hidden state using class '${hiddenClassName}'.`);
    // --- End Initial State Setting ---

    // --- Add Click Listeners (No change here) ---
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            elementosWhatsApp.forEach(function (elemento) {
                elemento.classList.toggle(hiddenClassName);
            });
        });
    });
});
