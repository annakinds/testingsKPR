import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const peelContainer = document.querySelector('.peel-container');
  const peelEffect = peelContainer.querySelector('.peel-effect');

  // Start with a very small triangle in the bottom right
  gsap.set(peelEffect, {
    clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)"
  });

  const peelTransition = () => {
    gsap.to(peelEffect, {
      clipPath: "polygon(100% 100%, 0% 100%, 100% 0%)",
      duration: 10,
      ease: "power2.out",
    });
  };

  peelContainer.addEventListener("click", peelTransition);
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) peelTransition();
  });
});
