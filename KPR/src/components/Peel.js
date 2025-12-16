import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const peelContainer = document.querySelector(".peel-container");
  const peelEffect = peelContainer.querySelector(".peel-effect");
  const triangleFill = peelContainer.querySelector(".triangle-fill");
  const cornerPeel = peelContainer.querySelector(".corner-peel");

gsap.set(peelEffect, {
  clipPath: "polygon(80% 85%, 100% 85%, 100% 100%, 80% 100%)"
});



  const peelTransition = () => {
    const tl = gsap.timeline();

    tl.to(cornerPeel, {
      width: "105%",
      height: "105%",
      duration: 1,
      ease: "power2.out"
    }, 0);

    tl.to(peelEffect, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power2.out"
    }, 0);

    tl.to(triangleFill, {
      x: "-120%",
      y: "-260%",
      scale: 1.2,
      duration: 1,
      ease: "power2.in"
    }, 0.6);
  };

  peelContainer.addEventListener("click", peelTransition);
});
