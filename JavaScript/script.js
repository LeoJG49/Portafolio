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
let lenis;

if (window.matchMedia('(min-width: 1200px)').matches) {
  lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
