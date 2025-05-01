// font-controls.js - Enhanced Typography Controls
document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const fontWeights = document.querySelectorAll('.font-weight');
    const fontSample = document.querySelector('.font-sample');
    const increaseBtn = document.querySelector('.increase-font');
    const decreaseBtn = document.querySelector('.decrease-font');
    const resetBtn = document.querySelector('.reset-font');
    
    // Font weight control
    fontWeights.forEach(weight => {
        weight.addEventListener('click', function() {
            // Remove active class from all weights
            fontWeights.forEach(w => w.classList.remove('active'));
            
            // Add active class to clicked weight
            this.classList.add('active');
            
            // Get the selected weight from data attribute
            const selectedWeight = this.getAttribute('data-weight') || '400';
            
            // Apply the selected weight to the sample text
            fontSample.style.fontWeight = selectedWeight;
        });
    });
    
    // Font size control
    let currentSize = 1; // Default scale factor
    
    // Set base font size from CSS (in pixels)
    const baseSize = parseFloat(getComputedStyle(fontSample).fontSize);
    
    // Increase font size
    increaseBtn.addEventListener('click', function() {
        currentSize += 0.1;
        updateFontSize();
    });
    
    // Decrease font size
    decreaseBtn.addEventListener('click', function() {
        if (currentSize > 0.5) {
            currentSize -= 0.1;
            updateFontSize();
        }
    });
    
    // Reset font size
    resetBtn.addEventListener('click', function() {
        currentSize = 1;
        updateFontSize();
    });
    
    function updateFontSize() {
        fontSample.style.fontSize = (baseSize * currentSize) + 'px';
    }
    
    // Initialize with regular weight
    const defaultWeight = document.querySelector('.font-weight[data-weight="400"]');
    if (defaultWeight) {
        defaultWeight.classList.add('active');
        fontSample.style.fontWeight = '400';
    }
});