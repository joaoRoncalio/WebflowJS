document.addEventListener('DOMContentLoaded', function () {
    console.log('[WhatsApp Toggle - Inline Style] DOMContentLoaded fired. Scheduling main logic...');

    // Wrap the core logic in setTimeout
    setTimeout(function() {
        console.log('[WhatsApp Toggle - Inline Style] Running main logic (delayed).');

        // --- Selectors ---
        const elementosWhatsApp = document.querySelectorAll('.box.svelte-lyhjhx.svelte-lyhjhx.svelte-lyhjhx');
        const links = document.querySelectorAll('.link-whatsapp');

        // --- Logging & Sanity Checks ---
        console.log(`[WhatsApp Toggle - Inline Style] Found ${elementosWhatsApp.length} elements to toggle.`); // Check this value now
        console.log(`[WhatsApp Toggle - Inline Style] Found ${links.length} trigger links.`);

        if (elementosWhatsApp.length === 0 || links.length === 0) {
            console.error('[WhatsApp Toggle - Inline Style] Critical: Missing target elements or trigger links (even after delay). Aborting script.');
            return; // Stop if elements still aren't found
        }

        // --- State Management ---
        let isCurrentlyVisible = false; // Assume hidden

        // --- Explicit Initial State Setup ---
        console.log('[WhatsApp Toggle - Inline Style] Applying initial hidden state (display: none !important) via inline style.');
        elementosWhatsApp.forEach(function(elemento) {
            elemento.style.setProperty('display', 'none', 'important');
        });
        console.log('[WhatsApp Toggle - Inline Style] Initial state applied.');

        // --- Add Click Listeners ---
        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                console.log('[WhatsApp Toggle - Inline Style] Link clicked!', event.target);
                event.preventDefault();
                isCurrentlyVisible = !isCurrentlyVisible;
                const newState = isCurrentlyVisible ? 'Visible' : 'Hidden';
                console.log(`[WhatsApp Toggle - Inline Style] New desired state: ${newState}`);
                const newDisplayStyle = isCurrentlyVisible ? 'flex' : 'none';
                elementosWhatsApp.forEach(function (elemento) {
                    console.log(`[WhatsApp Toggle - Inline Style] Setting display: ${newDisplayStyle} !important on element:`, elemento);
                    elemento.style.setProperty('display', newDisplayStyle, 'important');
                });
            });
        });

        console.log('[WhatsApp Toggle - Inline Style] Script setup complete (delayed). Waiting for clicks.');

    }, 100); // Delay execution by 100 milliseconds (adjust if needed, 0 might even work)

});
