import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const peelContainer = document.querySelector('.peel-container');
  const peelEffect = peelContainer.querySelector('.peel-effect');

  gsap.set(peelEffect, {
    clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)"
  });

  const peelTransition = () => {
    gsap.to(peelEffect, {
      clipPath: "polygon(100% 100%, 0% 100%, 100% 0%)",
      duration: 1,
      ease: "power2.out",
    });
  };

  peelContainer.addEventListener("click", peelTransition);
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) peelTransition();
  });
});
