import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const peelContainer = document.querySelector(".peel-container");
  const peelEffect = peelContainer.querySelector(".peel-effect");
  const triangleFill = peelContainer.querySelector(".triangle-fill");
  const cornerPeel = peelContainer.querySelector(".corner-peel");

gsap.set(peelEffect, {
  clipPath: "polygon(82.5% 82.5%, 100% 80%, 100% 100%, 82.5% 100%)"
});



  const peelTransition = () => {
    const tl = gsap.timeline();

    tl.to(peelEffect, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power2.out"
    }, 0);

    tl.to(cornerPeel, {
      width: "100%",
      height: "100%",
      duration: 1,
      ease: "power2.out"
    }, 0);

    tl.to(triangleFill, {
      x: "-100%",
      y: "-250%",
      duration: 1,
      ease: "power2.in"
    }, 0.6);
  };

  peelContainer.addEventListener("click", peelTransition);
});
