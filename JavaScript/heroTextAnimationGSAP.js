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
                y: 120,
                duration: 1.2,
                opacity: 0,
                stagger: .09,
                ease: "back.inOut",
            })
            return split;
        }
    })
})