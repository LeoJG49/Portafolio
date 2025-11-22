gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-container");
    const lastCard = document.querySelector(".fill.scroll");
    const pinnedSections = document.querySelectorAll(".pinned");
    //TODO
    //Fixed the bug of the last skill-card that doesn't make the animation correctly.
    pinnedSections.forEach((section, index, sections) => {
        let cards = section.querySelector(".skill-card");

        let nextSection = sections[index + 1] || lastCard;
        //This endScalePoint defines the point where the scale animation will end.
        let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;
        //In this way, the scale animation will end when the next section reaches the top of the viewport.
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top top",
                //This end will pin the section until the next one reaches the top of the viewport.
                end: index === sections.length ? `+=${lastCard.offsetHeight / 2}` : form.offsetTop - window.innerHeight,
                pin: true,
                pinSpacing: false,
                scrub: 1,
                
            }
        })
        //Image Scale Animation When Is Going Behind the Next Image
        gsap.fromTo(cards,{scale: 1}, {
            scale: .5,
            ease: "none",
            scrollTrigger:{
                trigger: section,
                start: "top top",
                end: endScalePoint,
                scrub: 1,
            }
        })
    });
})