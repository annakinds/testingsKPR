import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const peelContainer = document.querySelector(".peel-container");
  const peelEffect = peelContainer.querySelector(".peel-effect");
  const triangleFill = peelContainer.querySelector(".triangle-fill");

  // Start with the peel-effect hidden (full black overlay)
  gsap.set(peelEffect, {
    clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)"
  });

  // Start with the triangle-fill full screen
  gsap.set(triangleFill, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)"
  });

  const peelTransition = () => {
    const tl = gsap.timeline();
    // Peel effect: reveal the purple background
    tl.to(peelEffect, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power2.out"
    }, 0);

    // Triangle fill: collapse from full screen to a point in the bottom-right
    tl.to(triangleFill, {
      clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)",
      duration: 1,
      ease: "power2.out"
    }, 0);
  };

  peelContainer.addEventListener("click", peelTransition);
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) peelTransition();
  });
});
