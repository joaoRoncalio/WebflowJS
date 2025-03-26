document.addEventListener('DOMContentLoaded', function () {
    // Select all elements to be shown/hidden
    var elementosWhatsApp = document.querySelectorAll('.box.svelte-lyhjhx.svelte-lyhjhx.svelte-lyhjhx');
    // Select all trigger links
    var links = document.querySelectorAll('.link-whatsapp');

    // --- Sanity Checks ---
    if (elementosWhatsApp.length === 0) {
        console.warn('WhatsApp toggle: No elements found for selector ".box.svelte-lyhjhx..."');
        return;
    }
    if (links.length === 0) {
        console.warn('WhatsApp toggle: No trigger links found for selector ".link-whatsapp"');
        return;
    }

    // --- Improvement: Track State with a Variable ---
    // Determine the initial visibility state ONCE by checking the first element.
    // This assumes all elements start in the same state (visible or hidden).
    let isCurrentlyVisible;
    try {
        // We still need getComputedStyle once to establish the starting point
        const initialDisplay = window.getComputedStyle(elementosWhatsApp[0]).getPropertyValue('display');
        isCurrentlyVisible = (initialDisplay !== 'none');
        // console.log('Initial WhatsApp state detected as:', isCurrentlyVisible ? 'Visible' : 'Hidden');
    } catch (e) {
        console.error("WhatsApp toggle: Error reading initial display style. Assuming hidden.", e);
        // Fallback if style check fails (e.g., element not fully rendered?)
        isCurrentlyVisible = false;
    }
    // --- End Improvement ---

    // Add a click listener to each trigger link
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link navigation

            // --- Improvement: Toggle the State Variable ---
            // Flip the state: if it was visible, it should now be hidden, and vice-versa.
            isCurrentlyVisible = !isCurrentlyVisible;
            // --- End Improvement ---

            // Apply the new state to ALL target elements
            elementosWhatsApp.forEach(function (elemento) {
                // --- Improvement: Set style based on the tracked state ---
                if (isCurrentlyVisible) {
                    // Set display to flex (or your desired visible state)
                    elemento.style.setProperty('display', 'flex', 'important');
                } else {
                    // Set display to none
                    elemento.style.setProperty('display', 'none', 'important');
                }
                // --- End Improvement ---
            });

            // Optional: Log the state change
            // console.log('WhatsApp state changed to:', isCurrentlyVisible ? 'Visible' : 'Hidden');
        });
    });
});
