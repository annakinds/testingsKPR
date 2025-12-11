
import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const fold = document.querySelector(".peel-fold");
  const rect = document.querySelector(".peel-rect");
  const corner = document.getElementById("cornerSquare");

  let isOpen = false;

  // initial state
  gsap.set(fold, {
    rotateY: 0,
  rotateX: 0,
  xPercent: 0,
  yPercent: 0,
  transformOrigin: "bottom right",
  });

  corner.addEventListener("click", (e) => {
    e.stopPropagation();
  isOpen = !isOpen;

  if (isOpen) {
    gsap.to(fold, {
      rotateY: -95,
      rotateX: 18,
      xPercent: 60,
      yPercent: -110,
      duration: 0.95,
      ease: "power3.out",
      onStart: () => (rect.style.pointerEvents = "none"),
      onComplete: () => (rect.style.pointerEvents = "none"),
    });
    } else {
    gsap.to(fold, {
      rotateY: 0,
      rotateX: 0,
      xPercent: 0,
      yPercent: 0,
      duration: 0.8,
      ease: "power3.inOut",
      onStart: () => (rect.style.pointerEvents = "auto"),
    });
    }
  });

  fold.addEventListener("click", () => {
    if (isOpen) corner.click();
  });
});

