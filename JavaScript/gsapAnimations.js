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