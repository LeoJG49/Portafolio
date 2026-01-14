import './dinamicHeader.js'
import './fadeInContainer.js'
import './footerTextHoverAnimation.js'
import './SkillAnimationGSAP.js'
import './SkillTextAnimationGSAP.js'
import './cardsAnimationGSAP.js'
import { initPageLoader } from './pageLoadingAnimationGSAP.js'
import { initHeroAnimations } from './gsapAnimations.js'
import { initHeroTextAnimation } from './heroTextAnimationGSAP.js'

//TODO las animaciones del header no se realizan
// Además que la animación del texto del hero se ve antes que termine la animación 
// del preloader. Arreglar el orden de las animaciones

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

// Inicializar animaciones en secuencia
async function initAnimations() {
    // 1. Ejecutar preloader primero
    await initPageLoader()
    
    // 2. Luego ejecutar animaciones del hero
    initHeroAnimations()
    
    // 3. Finalmente ejecutar animación del texto del hero
    await initHeroTextAnimation()
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initAnimations()
    smoothScroll()
})