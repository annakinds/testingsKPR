import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const peelContainer = document.querySelector(".peel-container");
  if (!peelContainer) return;

  const peelEffect = peelContainer.querySelector(".peel-effect");
  const triangle = peelContainer.querySelector(".triangle-fill");

  // Safety checks
  if (!peelEffect || !triangle) return;

  // Initial states
  gsap.set(peelEffect, {
    // full overlay visible at start
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  });

  gsap.set(triangle, {
    // collapsed into the bottom-right corner (hidden)
    clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)"
  });

  const peelTransition = () => {
    const tl = gsap.timeline();

    // Reveal the page under peelEffect
    tl.to(
      peelEffect,
      {
        // peel away from bottom-right toward top-left
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
        duration: 1,
        ease: "power2.out"
      },
      0
    );

    // Orange triangle that appears in the corner while peeling
    tl.to(
      triangle,
      {
        // visible triangle in bottom-right corner
        clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.out"
      },
      0
    );
  };

  // Trigger by click on the peel area
  peelContainer.addEventListener("click", peelTransition);

  // Trigger by scroll down
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) peelTransition();
  });
});
