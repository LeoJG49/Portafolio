import './dinamicHeader.js'
import './fadeInContainer.js'
import './footerTextHoverAnimation.js'
import './SkillAnimationGSAP.js'
import './SkillTextAnimationGSAP.js'
import './cardsAnimationGSAP.js'
import { initPageLoader } from './pageLoadingAnimationGSAP.js'
import { initHeroTextAnimation } from './heroTextAnimationGSAP.js'
import { initHeroAnimations } from './gsapAnimations.js'

//TODO las animaciones del header no se realizan
// Además que la animación del texto del hero se ve antes que termine la animación 
// del preloader. Arreglar el orden de las animaciones

async function init() {
    await initPageLoader ()
    initHeroAnimations()
    initHeroTextAnimation()
}

init()

//Smooth Scroll
const lenis = new Lenis()
lenis.on('scroll', () => {})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
