import './dinamicHeader.js'
import './footerTextHoverAnimation.js'
import './cardsAnimationGSAP.js'
import { initPageLoader } from './pageLoadingAnimationGSAP.js'
import { initHeroTextAnimation } from './heroTextAnimationGSAP.js'
import { initHeroAnimations } from './headerAnimation.js'

async function init() {
    await initPageLoader ()
    initHeroAnimations()
    initHeroTextAnimation()
}
init()

//Smooth Scroll
if (window.innerWidth > 1201) {
    const lenis = new Lenis()
    lenis.on('scroll', () => {})
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
}
