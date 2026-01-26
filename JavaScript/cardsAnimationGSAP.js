// Cards Animation
const cards = document.querySelectorAll(".technologies-item");
const timelines = new Map(); // Close one when another opens

cards.forEach(card => {
  const inner = card.querySelector('.card-inner');
  const back = card.querySelector('.back-content');

  // Initial States
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

  // Click to toggle card
  card.addEventListener('click', (e) => {
    e.stopPropagation();

    // Close other cards
    timelines.forEach((otherTl, otherCard) => {
      if (otherCard !== card && !otherTl.reversed()) {
        otherTl.reverse();
      }
    });

    // Toggle this card
    tl.reversed() ? tl.play() : tl.reverse();
  });
});

// Close cards when clicking outside
document.addEventListener('click', () => {
  timelines.forEach((tl) => {
    if (!tl.reversed()) tl.reverse();
  });
});