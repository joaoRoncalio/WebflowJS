document.addEventListener('DOMContentLoaded', function () {
    console.log('[WhatsApp Toggle - Inline Style] DOMContentLoaded fired.');

    // --- Selectors ---
    const elementosWhatsApp = document.querySelectorAll('.box.svelte-lyhjhx.svelte-lyhjhx.svelte-lyhjhx');
    const links = document.querySelectorAll('.link-whatsapp');

    // --- Logging & Sanity Checks ---
    console.log(`[WhatsApp Toggle - Inline Style] Found ${elementosWhatsApp.length} elements to toggle.`);
    console.log(`[WhatsApp Toggle - Inline Style] Found ${links.length} trigger links.`);

    if (elementosWhatsApp.length === 0 || links.length === 0) {
        console.error('[WhatsApp Toggle - Inline Style] Critical: Missing target elements or trigger links. Aborting script.');
        return; // Stop if elements aren't found
    }

    // --- State Management ---
    // We ASSUME the elements should start HIDDEN and avoid reading any styles.
    // 'isCurrentlyVisible' tracks the desired state according to the script.
    let isCurrentlyVisible = false;

    // --- Explicit Initial State Setup ---
    // Force all target elements to be hidden using inline styles when the script loads.
    // This ensures consistency and the desired starting state.
    console.log('[WhatsApp Toggle - Inline Style] Applying initial hidden state (display: none !important) via inline style.');
    elementosWhatsApp.forEach(function(elemento) {
        // Use setProperty to correctly apply '!important'
        elemento.style.setProperty('display', 'none', 'important');
    });
    console.log('[WhatsApp Toggle - Inline Style] Initial state applied.');
    // --- End Initial State Setup ---

    // --- Add Click Listeners ---
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            console.log('[WhatsApp Toggle - Inline Style] Link clicked!', event.target);
            event.preventDefault(); // Prevent default link navigation

            // 1. Toggle the state variable
            isCurrentlyVisible = !isCurrentlyVisible;
            const newState = isCurrentlyVisible ? 'Visible' : 'Hidden';
            console.log(`[WhatsApp Toggle - Inline Style] New desired state: ${newState}`);

            // 2. Determine the style value to apply
            const newDisplayStyle = isCurrentlyVisible ? 'flex' : 'none'; // Adjust 'flex' if needed

            // 3. Apply the new style directly to each element's inline style
            elementosWhatsApp.forEach(function (elemento) {
                console.log(`[WhatsApp Toggle - Inline Style] Setting display: ${newDisplayStyle} !important on element:`, elemento);
                // Use setProperty again to ensure '!important' is applied
                elemento.style.setProperty('display', newDisplayStyle, 'important');

                // Debug: Immediately check the inline style value after setting it
                // console.log(`[WhatsApp Toggle - Inline Style] Element inline style.display is now:`, elemento.style.getPropertyValue('display'));
                // console.log(`[WhatsApp Toggle - Inline Style] Element inline style priority is now:`, elemento.style.getPropertyPriority('display'));
            });
        });
    });

    console.log('[WhatsApp Toggle - Inline Style] Script setup complete. Waiting for clicks.');
});
