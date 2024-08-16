function runTypingEffect() {
    const text = 'I am Rahul NS'
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        }, delay * i)
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);

// Function to check screen width and add/remove btn-sm class
function adjustButtonSize() {
    const buttons = document.querySelectorAll('.two-btn');
    if (window.innerWidth <= 767) {
        buttons.forEach(button => button.classList.add('btn-sm'));
    } else {
        buttons.forEach(button => button.classList.remove('btn-sm'));
    }
}

// Run on window resize
window.addEventListener('resize', adjustButtonSize);

// Run on initial load
adjustButtonSize();

// dynamically update the year in footer
function updateYear() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

document.addEventListener('DOMContentLoaded', updateYear);
