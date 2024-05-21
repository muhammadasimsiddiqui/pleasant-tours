// Contact Form
function validate() {
    alert('Form is being submitted.');
    
}


document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.input-text');

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value !== '') {
                this.classList.add('not-empty');
            } else {
                this.classList.remove('not-empty');
            }
        });
    });
});