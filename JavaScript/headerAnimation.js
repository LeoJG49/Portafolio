export function initHeroAnimations() {
    //Header Appear
    gsap.to("header", {
        y: 0,
        duration: 1,
        ease: "power3.inOut",
    })
}