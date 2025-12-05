(async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);

  const fold = document.querySelector(".peel-fold");
  const rect = document.querySelector(".peel-rect");

  gsap.set(fold, {
    transformOrigin: "top right",
    skewY: 45,
    rotateZ: -25,
    xPercent: 25,
    yPercent: -30,
  });

  rect.addEventListener("mouseenter", () => {
    gsap.to(fold, {
      skewY: 0,
      rotateZ: 0,
      xPercent: 0,
      yPercent: 0,
      duration: 0.7,
      ease: "power3.out"
    });
  });

  rect.addEventListener("mouseleave", () => {
    gsap.to(fold, {
      skewY: 45,
      rotateZ: -25,
      xPercent: 25,
      yPercent: -30,
      duration: 0.7,
      ease: "power3.in"
    });
  });
})();