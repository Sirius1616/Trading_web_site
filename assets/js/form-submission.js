document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[data-sheets]');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Combine all form data from sessionStorage
            const formData = new FormData(form);
            const sessionData = JSON.parse(sessionStorage.getItem('formData') || {};
            
            // Merge all data
            const completeData = {
                ...sessionData,
                ...Object.fromEntries(formData.entries())
            };
            
            try {
                const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(completeData)
                });
                
                if (response.ok) {
                    // Clear session storage
                    sessionStorage.removeItem('formData');
                    window.location.href = 'thanks.html';
                } else {
                    throw new Error('Error submitting form');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario. Por favor inténtalo de nuevo.');
            }
        });
    }
});