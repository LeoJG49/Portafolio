//Main Text Animation
gsap.registerPlugin(SplitText)

document.fonts.ready.then(() => {
    gsap.set(".paragraph", { opacity: 1});

    let split;
    SplitText.create(".paragraph", {
        type: "words, lines",
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
                stagger: .05,
                ease: "power4.out",
                // repeat: -1,
                // yoyo: true,
            })
            return split;
        }
    })
})