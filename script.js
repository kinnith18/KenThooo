const customCursor = document.getElementById('customCursor');

    // Update the cursor position based on mouse movements
    document.addEventListener('mousemove', (e) => {
        const cursorSize = 20; // Adjust based on the size of your cursor
        customCursor.style.left = e.clientX - cursorSize / 2 + 'px';
        customCursor.style.top = e.clientY - cursorSize / 2 + 'px';
    });

    // Scale the cursor when hovering over specific elements
    document.querySelectorAll('a, button, img').forEach(item => {
        item.addEventListener('mouseover', () => {
            customCursor.style.transform = 'scale(1.5)'; // Scale up on hover
        });
        item.addEventListener('mouseleave', () => {
            customCursor.style.transform = 'scale(1)'; // Scale down when not hovering
        });
    });