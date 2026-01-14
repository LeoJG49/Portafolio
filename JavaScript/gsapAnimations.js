export function initHeroAnimations() {
    //Header Appear
    gsap.to("header", {
        y: 0,
        duration: 1,
        ease: "ease.out",
    })

    //Logo animation
    gsap.to(".head-link", {
        y: 0,
        duration: 1,
        delay: .3,
        ease: "bounce",
    })

    //Menu nav animation
    gsap.to(".objects", {
        y: 0,
        duration: 1,
        delay: .3,
        ease: "bounce",
        stagger: .25,
    })
}