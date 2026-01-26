//Skill Text Animation
gsap.registerPlugin(ScrollTrigger)

document.fonts.ready.then(() => {
    gsap.set(".skill-title", { 
        opacity: 1,
    });

    let split;
    SplitText.create(".skill-title", {
        type: "words, lines",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "words",
        onSplit: (self) => {
            split = gsap.from(self.words, {
                y: 120,
                duration: 1,
                opacity: 0,
                stagger: .1,
                scrollTrigger: {
                    trigger: ".skill-title",
                    scrub: 1,
                    start: "top 80%",
                    end: "top 30%",
                }
            })
            ScrollTrigger.refresh();
            return split;
        }
    })
})