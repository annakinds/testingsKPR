import gsap from "gsap";

const fold = document.querySelector(".peel-fold");
const rect = document.querySelector(".peel-rect");

let isOpen = false;

gsap.set(fold, {
  transformOrigin: "top right",
  rotateY: 0,
  xPercent: 0,
  yPercent: 0,
  zIndex: 20,
});

rect.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    gsap.to(fold, {
      rotateY: -95,
      xPercent: 25,
      yPercent: -10,
      duration: 0.9,
      ease: "power3.out",
    });
  } else {
    gsap.to(fold, {
      rotateY: 0,
      xPercent: 0,
      yPercent: 0,
      duration: 0.9,
      ease: "power3.inOut",
    });
  }
});
