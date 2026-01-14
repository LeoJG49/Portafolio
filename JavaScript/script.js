import './dinamicHeader.js'
import './fadeInContainer.js'
import './gsapAnimations.js'
import './footerTextHoverAnimation.js'
import './heroTextAnimationGSAP.js'
import './SkillAnimationGSAP.js'
import './SkillTextAnimationGSAP.js'
import './cardsAnimationGSAP.js'

//Smooth Scroll

function smoothScroll () {
    const lenis = new Lenis()
    
    lenis.on('scroll', () => {})
    
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
}

smoothScroll()