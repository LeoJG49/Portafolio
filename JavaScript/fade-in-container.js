const faders = document.querySelectorAll('.skill-container');

const appearOptions = {
    threshold: 0.3 //Se activa cunando el 30% del elemento es visible
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {        
        entry.target.classList.add('visible');
            observer.unobserve(entry.target); //deja de observarlo una vez animado
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});