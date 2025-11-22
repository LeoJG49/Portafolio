//Main Text Animation
gsap.registerPlugin(SplitText)

document.fonts.ready.then(() => {
    gsap.set(".skill-title", { opacity: 1});

    let split;
    SplitText.create(".skill-title", {
        type: "words",
        wordsClass: "word",
        linesClass: "line",
        autoSplit: true,
        mask: "words",
        onSplit: (self) => {
            split = gsap.from(self.words, {
                delay: .5,
                y: 100,
                duration: 1,
                opacity: 0,
                stagger: .1,
                ease: "power4.out",
            })
            return split;
        }
    })
})