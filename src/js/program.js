document.addEventListener('DOMContentLoaded', function() {
    const scrollElement = document.querySelector('.scroll');
    const topPage = document.querySelector('.top-page');
    const imageBackground = document.querySelector('.image-background');
    
    function updateScrollPosition() {
        const imageBackgroundBottom = imageBackground.offsetTop + imageBackground.offsetHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop < imageBackgroundBottom - window.innerHeight - 100) {
            scrollElement.classList.add('fixed');
        } else {
            scrollElement.classList.remove('fixed');
        }
    }
    
    window.addEventListener('scroll', updateScrollPosition);
    updateScrollPosition();
    
    // Handle responsive form - auto-resize textarea
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });
    
    // Handle responsive navigation for mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleScreenChange(e) {
        if (e.matches) {
            // Mobile adjustments
            const topPageElements = document.querySelectorAll('.top-page h2, .top-page h3');
            topPageElements.forEach(element => {
                element.style.fontSize = window.getComputedStyle(element).fontSize;
            });
        }
    }
    
    mediaQuery.addListener(handleScreenChange);
    handleScreenChange(mediaQuery);
    
    // Initialize form elements
    const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.setAttribute('data-focused', 'true');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.removeAttribute('data-focused');
            }
        });
    });
});
