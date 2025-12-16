import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const peelContainer = document.querySelector(".peel-container");
  const peelEffect = peelContainer.querySelector(".peel-effect");
  const triangleFill = peelContainer.querySelector(".triangle-fill");
  const cornerPeel = peelContainer.querySelector(".corner-peel");

  gsap.set(peelEffect, {
    clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)"
  });

  /*   gsap.set(triangleFill, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)"
    }); */

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
      wx: "-100%",   
      y: "-100%",
      duration: 1,
      ease: "power2.out"
    }, 1);

  
  };


  peelContainer.addEventListener("click", peelTransition);
});
