// Cards Animation - click + una abierta a la vez

const cards = document.querySelectorAll(".technologies-item");
const timelines = new Map(); // para cerrar otras cuando una se abre

cards.forEach(card => {
  const inner = card.querySelector('.card-inner');
  const back = card.querySelector('.back-content');

  // estados iniciales
  gsap.set(back, { opacity: 0 });
  gsap.set(inner, { rotateY: 0 });

  const tl = gsap.timeline({ paused: true, reversed: true });

  tl.to(card, {
        rotateY: 180,
        scale: 1.08,
        duration: 0.8,
        ease: 'power3.inOut'
    })
    .to(back, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out'
    }, '-=0.3');

  timelines.set(card, tl);

  // click para alternar y cerrar otras
  card.addEventListener('click', (e) => {
    e.stopPropagation();

    // cerrar cualquier otra tarjeta abierta
    timelines.forEach((otherTl, otherCard) => {
      if (otherCard !== card && !otherTl.reversed()) {
        otherTl.reverse();
      }
    });

    // alternar esta tarjeta
    tl.reversed() ? tl.play() : tl.reverse();
  });
});

// click fuera cierra todas
document.addEventListener('click', () => {
  timelines.forEach((tl) => {
    if (!tl.reversed()) tl.reverse();
  });
});