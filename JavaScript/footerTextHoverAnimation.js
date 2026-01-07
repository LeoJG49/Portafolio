const title = new SplitType('.footer-title', {types: "words, chars"});

title.chars.forEach((char) => {
    char.addEventListener("mouseenter", charsHover);

    function charsHover() {
        gsap.timeline()
        .to(char, {
            y:gsap.utils.random(-50, 50),
            x: gsap.utils.random(-50, 50),
            rotate: gsap.utils.random(-90, 90),
            scale: gsap.utils.random(0.5, 1.5),
            duration: .5,
            color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)})`,
            onStart: () => {
                char.removeEventListener("mouseenter", charsHover);
            }
        })
        .to(char, {
            y: 0,
            x: 0,
            rotate: 0,
            scale: 1,
            color: "#fefefe",
            delay: 1,
            duration: .5,
            onComplete: () => {
                setTimeout(() => {
                    char.addEventListener("mouseenter", charsHover);
                }, 100);
            }
        })
    }
})