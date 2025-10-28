const textAnimation = document.querySelectorAll('.author')

const appearText = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
                observer.unobserve(entry.target);
        }
    })
}, appearText);

textAnimation.forEach(fader => {
    appearOnScroll.observe(fader);
})