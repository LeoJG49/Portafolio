// const faders = document.querySelectorAll('.skill-container');

// const { startTransition } = require("react");

// const appearOptions = {
//     threshold: 0.3 //Se activa cunando el 30% del elemento es visible
// };

// const appearOnScroll = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {        
//         entry.target.classList.add('visible');
//             observer.unobserve(entry.target); //deja de observarlo una vez animado
//         }
//     })
// }, appearOptions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
// });

//FADER ANIMATION WITH GSAP

// gsap.registerPlugin(ScrollTrigger); //ALWAYS REGISTER THE PLUGIN

// gsap.from(".skill-container", {
//     x: -300,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".skill-container",
//         start: "top 30%",
//         markers: true
//     }
        //we select what is the trigger of the animation
        // scrub: 1, //Make the animation smoother, but if we use scrub, dont use duration on the animation
        //It doesn't make any sense
        // toggleActions: "play none none none"
                //onEnter onLeave onEnterBack onLeaveBack
                //play pause resume restart reverse complete none
                //Those are the values we can use on each section
                //on toggleActions: ""
// })