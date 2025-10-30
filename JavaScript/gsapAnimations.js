//Header Appear
gsap.from("header", {
    transform: "translateY(-100px)",
    duration: 1,
    ease: "ease.out",
})

//Logo animation
gsap.from(".head-link", {
    transform: "translateY(-100px)",
    duration: 1,
    delay: .3,
    ease: "bounce",
})

//Menu nav animation
gsap.from(".objects", {
    transform: "translateY(-100px)",
    duration: 1,
    delay: .3,
    ease: "bounce",
    stagger: .25,
})


//Text animation
//Debemos crear una variables para crear un objeto SplitType('#id or .className')

const text = new SplitType('.paragraph', {types: 'lines, words'})

text.lines.forEach((word, index) => {

    let textAnimationTL = gsap.timeline() //Marcamos qué queremos que se anime primero

    textAnimationTL.from(word, {
        y: 200,
        duration: 1.5,
        delay: index * .3,
        ease: "back.inOut",
        opacity: 0,
        stagger: .3,
    }) 
});

text.words.forEach((char, index) => {
    
    gsap.from(char, {
        y: 200,
        duration: 1,
        delay: index * .05,
        ease: "back.in",
        opacity: 0,
    })
})