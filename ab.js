
        // Disable common developer tool shortcuts
        document.addEventListener('keydown', function(event) {
            // Disable Ctrl+U (view source)
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
                window.location.href = 'https://ab-datagh.vercel.app'; // Redirect to the specified URL
            }

            // Disable F12 (open developer tools)
            if (event.key === 'F12') {
                event.preventDefault();
                window.location.href = 'https://ab-datagh.vercel.app';
            }

            // Disable Ctrl+Shift+I (open developer tools)
            if (event.ctrlKey && event.shiftKey && event.key === 'I') {
                event.preventDefault();
                window.location.href = 'https://ab-datagh.vercel.app';
            }

            // Disable Ctrl+Shift+C (inspect element)
            if (event.ctrlKey && event.shiftKey && event.key === 'C') {
                event.preventDefault();
                window.location.href = 'https://ab-datagh.vercel.app';
            }

            // Disable Ctrl+Shift+J (open JavaScript console)
            if (event.ctrlKey && event.shiftKey && event.key === 'J') {
                event.preventDefault();
                window.location.href = 'https://ab-datagh.vercel.app';
            }
        });

        // Disable right-click context menu
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            window.location.href = 'https://ab-datagh.vercel.app';
        });

        // Optional: Prevent user from dragging content (for copying)
        document.addEventListener('dragstart', function(event) {
            event.preventDefault();
            window.location.href = 'https://ab-datagh.vercel.app';
        });
