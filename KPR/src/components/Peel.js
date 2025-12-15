import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const rect = document.querySelector(".peel-rect");
  const overlay = document.querySelector(".corner-overlay");

  document.body.style.overflow = "hidden";

  const tl = gsap.timeline({ paused: true });

  gsap.set(overlay, {
    clipPath: "polygon(100% 100%, 100% 80%, 80% 100%)",
    WebkitClipPath: "polygon(100% 100%, 100% 80%, 80% 100%)"
  });

  tl.to(overlay, {
    clipPath: "polygon(100% 100%, 100% 0, 0 100%)", 
    WebkitClipPath: "polygon(100% 100%, 100% 0, 0 100%)",
    ease: "none"
  });

  tl.eventCallback("onComplete", () => {
    rect.remove();                     
    document.body.style.overflow = "auto";
    const container = document.querySelector(".peel-container");
    if (container) container.style.height = "auto";
  });

  let progress = 0;
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  const updateProgress = (delta) => {
    progress += delta * 0.0003;
    progress = clamp(progress, 0, 1);
    console.log("progress", progress);
    tl.progress(progress);
  };
  
  tl.eventCallback("onComplete", () => {
    rect.remove();
    document.body.style.overflow = "auto";
    const container = document.querySelector(".peel-container");
    if (container) container.style.height = "auto";
  });


  window.addEventListener("wheel", (e) => {
    e.preventDefault();
    updateProgress(e.deltaY);
  }, { passive: false });

  let touchStartY = null;
  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  });
  window.addEventListener("touchmove", (e) => {
    if (touchStartY == null) return;
    const currentY = e.touches[0].clientY;
    const delta = touchStartY - currentY;
    updateProgress(delta);
    touchStartY = currentY;
    e.preventDefault();
  }, { passive: false });
  window.addEventListener("touchend", () => {
    touchStartY = null;
  });
});
