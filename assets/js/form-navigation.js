document.addEventListener('DOMContentLoaded', function() {
    // Make all option items interactive
    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remove selected class from all siblings
            this.parentElement.querySelectorAll('.option-item').forEach(sibling => {
                sibling.classList.remove('selected');
            });
            
            // Add selected class to clicked item
            this.classList.add('selected');
            
            // Update the hidden input value
            const form = this.closest('form');
            const inputName = this.parentElement.previousElementSibling.textContent.trim();
            let inputId;
            
            if (inputName.includes('tiempo')) {
                inputId = 'timeInput';
            } else if (inputName.includes('Género')) {
                inputId = 'genderInput';
            } else if (inputName.includes('edad')) {
                inputId = 'ageInput';
            } else if (inputName.includes('dedicas')) {
                inputId = 'professionInput';
            }
            
            if (inputId) {
                form.querySelector(`#${inputId}`).value = this.getAttribute('data-value');
            }
        });
    });
    
    // Next button functionality
    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const form = this.closest('form');
            const currentStage = form.querySelector('[name="formStage"]').value;
            let nextPage;
            
            switch(currentStage) {
                case 'time':
                    nextPage = 'gender-selection.html';
                    break;
                case 'gender':
                    nextPage = 'age-selection.html';
                    break;
                case 'age':
                    nextPage = 'occupation-selection.html';
                    break;
            }
            
            if (nextPage) {
                // Validate selection
                const hiddenInput = form.querySelector('input[type="hidden"][required]');
                if (!hiddenInput.value) {
                    alert('Por favor selecciona una opción');
                    return;
                }
                
                // Store data in sessionStorage
                const formData = new FormData(form);
                const formEntries = Object.fromEntries(formData.entries());
                sessionStorage.setItem('formData', JSON.stringify(formEntries));
                
                window.location.href = nextPage;
            }
        });
    });
});