const track = document.querySelector(".scroll-track");

// Duplicar contenido una vez cargado
track.innerHTML += track.innerHTML;

// Recalcular ancho total después de duplicar
const totalWidth = track.scrollWidth / 2;

// Crear animación infinita
const tween = gsap.to(track, {
  x: `-=${totalWidth}`,
  duration: 25,
  ease: "ease.in",
  repeat: -1,
  modifiers: {
    x: gsap.utils.wrap(-totalWidth, 0)
  }
});

// Pausar y reanudar al hacer hover
track.addEventListener("mouseenter", () => tween.pause());
track.addEventListener("mouseleave", () => tween.resume());