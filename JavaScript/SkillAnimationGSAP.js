gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer-container");
    const lastCard = document.querySelector(".card.scroll");
    const pinnedSections = gsap.utils.toArray(".pinned");

    // Función para detectar si es móvil
    const isMobile = () => window.innerWidth <= 480;
    const isTablet = () => window.innerWidth > 480 && window.innerWidth <= 1200;
    const isDesktop = () => window.innerWidth > 1200;

    // Función para crear las animaciones
    const createAnimations = () => {
        // Limpiar animaciones previas
        gsap.globalTimeline.clear();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        pinnedSections.forEach((section, index, sections) => {
            let img = section.querySelector(".skill-content");

            let nextSection = sections[index + 1] || lastCard;
            
            // Calcular el punto final de la escala basado en el tamaño de la pantalla
            let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;
            
            // Ajustar el end point según el dispositivo
            let endPoint;
            if (isMobile()) {
                // En móvil, reducir el rango de scroll para que la animación sea más suave
                endPoint = index === sections.length - 1 
                    ? `+=${lastCard.offsetHeight * 0.3}` 
                    : `+=${Math.min(window.innerHeight * 1.5, nextSection.offsetTop - section.offsetTop)}`;
            } else if (isTablet()) {
                endPoint = index === sections.length - 1 
                    ? `+=${lastCard.offsetHeight * 0.4}` 
                    : `+=${Math.min(window.innerHeight * 1.8, nextSection.offsetTop - section.offsetTop)}`;
            } else {
                // Desktop
                endPoint = index === sections.length - 1 
                    ? `+=${lastCard.offsetHeight / 2}` 
                    : footer.offsetTop - window.innerHeight;
            }

            // Animación de pin
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: endPoint,
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    markers: false, // Cambiar a true para debug
                }
            });

            // Animación de escala de la imagen
            gsap.fromTo(img, 
                { scale: 1 }, 
                {
                    scale: isMobile() ? 0.7 : isTablet() ? 0.6 : 0.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: endScalePoint,
                        scrub: 1,
                        markers: false, // Cambiar a true para debug
                    }
                }
            );
        });

        // Refrescar ScrollTrigger después de crear todas las animaciones
        ScrollTrigger.refresh();
    };

    // Crear animaciones iniciales
    createAnimations();

    // Recalcular animaciones cuando cambia el tamaño de la ventana
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            createAnimations();
        }, 250); // Esperar 250ms después de que termine el resize
    });

    // Recalcular cuando la orientación cambia (importante para móviles)
    window.addEventListener("orientationchange", () => {
        setTimeout(() => {
            createAnimations();
        }, 500);
    });
});
