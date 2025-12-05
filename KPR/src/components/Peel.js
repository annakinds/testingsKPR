if (typeof window !== 'undefined') {
  (async () => {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    const fold = document.querySelector(".peel-fold");
    const rect = document.querySelector(".peel-rect");

    if (!fold || !rect) return;

    rect.addEventListener("mouseenter", () => {
      gsap.to(fold, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.7,
        ease: "power3.out"
      });
    });

    rect.addEventListener("mouseleave", () => {
      gsap.to(fold, {
        rotateX: 90,
        rotateY: 90,
        duration: 0.7,
        ease: "power3.in"
      });
    });
  })();
}