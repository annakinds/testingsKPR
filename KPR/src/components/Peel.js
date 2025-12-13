import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const fold = document.querySelector(".peel-fold");
  const front = document.querySelector(".corner-square");
  const back = document.querySelector(".corner-square-back");

  // Timeline controlling both
  const tl = gsap.timeline({ paused: true });

  // Peel front face
  tl.to(fold, {
    rotateY: -95,
    rotateX: 18,
    ease: "none"
  }, 0);

  // Front square rotate + darken shadow
  tl.to(front, {
    rotateZ: 25,
    x: -15,
    y: -15,
    boxShadow: "10px 10px 30px rgba(0,0,0,0.3)"
  }, 0);

  // Back square appear (orange)
  tl.to(back, {
    rotateZ: 25,
    x: -15,
    y: -15
  }, 0);

  let progress = 0;

  const updateProgress = (delta) => {
    progress += delta * 0.001;
    progress = Math.min(Math.max(progress, 0), 1);
    tl.progress(progress);
  };

  window.addEventListener("wheel", (e) => updateProgress(e.deltaY));

  let touchStartY = null;
  window.addEventListener("touchstart", (e) => touchStartY = e.touches[0].clientY);
  window.addEventListener("touchmove", (e) => {
    if (touchStartY === null) return;
    const delta = touchStartY - e.touches[0].clientY;
    updateProgress(delta);
    touchStartY = e.touches[0].clientY;
    e.preventDefault();
  }, { passive: false });

});
