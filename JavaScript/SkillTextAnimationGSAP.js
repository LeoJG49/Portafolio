//Main Text Animation
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
        mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
                y: 115,
                duration: 1,
                opacity: 0,
                stagger: .1,
                scrollTrigger: {
                    trigger: ".skill-title",
                    scrub: 1,
                    start: "top 80%",
                }
            })
            return split;
        }
    }, 200)
})