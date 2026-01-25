export function initHeroTextAnimation() {
    return new Promise((resolve) => {
        document.fonts.ready.then(() => {
            gsap.set(".paragraph", { opacity: 1, y: 0 });

            let split;
            SplitText.create(".paragraph", {
                type: "words, lines",
                wordsClass: "word",
                linesClass: "line",
                autoSplit: true,
                mask: "words",
                onSplit: (self) => {
                    split = gsap.from(self.words, {
                        y: 100,
                        duration: 1,
                        opacity: 0,
                        stagger: .09,
                        ease: "back.inOut",
                        onComplete: () => {
                            resolve()
                        }
                    })
                    return split;
                }
            })
        })
    })
}