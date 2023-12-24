function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
        confetti.style.opacity = Math.random();
        confettiContainer.appendChild(confetti);
    }
}

// Run the confetti effect after the page has loaded
document.addEventListener('DOMContentLoaded', createConfetti);