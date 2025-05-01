// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any global functionality
    console.log('App initialized');
    
    // Image interaction
    const productImage = document.querySelector('.hero-image');
    if (productImage) {
        productImage.addEventListener('click', function() {
            this.classList.toggle('zoom');
        });
    }
    
    // Join community button
    const joinBtn = document.getElementById('joinCommunityBtn');
    if (joinBtn) {
        joinBtn.addEventListener('click', function(e) {
            // Can add analytics tracking here
            console.log('Join community button clicked');
        });
    }
});