const container = document.getElementById("cardContainer");
const output = document.getElementById("output");

let startX = 0, isDragging = false, currentCard = null;
let startPos = { x: 0, y: 0 }, swiping = false;

const isTouch = "ontouchstart" in window;
const ev = {
    down: isTouch ? "touchstart" : "mousedown",
    move: isTouch ? "touchmove" : "mousemove",
    up: isTouch ? "touchend" : "mouseup"
};

const pos = (e) => {
    const p = isTouch ? e.touches[0] : e;
    const r = container.getBoundingClientRect();
    return { x: p.clientX - r.left, y: p.clientY - r.top };
};

//SWIPING
const topCard = () => container.querySelector(".card:last-child");

const startDrag = (x) => {
    currentCard = topCard();
    if (!currentCard) return;
    startX = x;
    isDragging = true;
    swiping = true;
    currentCard.style.transition = "none";
};

const moveDrag = (x) => {
    if (!isDragging || !currentCard) return;
    const dx = x - startX;
    currentCard.style.transform = `translateX(${dx}px) rotate(${dx / 10}deg)`;
};

const endDrag = (x) => {
    if (!isDragging || !currentCard) return;
    const dx = x - startX;
    const swipe = Math.abs(dx) > 10;
    currentCard.style.transition = "transform .4s, opacity .4s";

    if (swipe) {
        const dir = dx > 0 ? 1 : -1;
        currentCard.style.transform = `translateX(${dir * 1000}px) rotate(${45 * dir}deg)`;
        currentCard.style.opacity = 0;
        setTimeout(() => currentCard.remove(), 400);
    } else {
        currentCard.style.transform = "";
    }

    isDragging = false;
    swiping = false;
};

//DIRECTION DETECTION
container.addEventListener(ev.down, (e) => {
    const p = pos(e);
    startPos = p;
    startDrag(p.x);
});

container.addEventListener(ev.move, (e) => {
    if (!swiping) return;
    const p = pos(e);

    const dx = p.x - startPos.x;
    const dy = p.y - startPos.y;
    output.textContent = Math.abs(dy) > Math.abs(dx)
        ? dy > 0 ? "Down" : "Up"
        : dx > 0 ? "Right" : "Left";

    moveDrag(p.x);

    if (!isTouch) e.preventDefault();
});

container.addEventListener(ev.up, (e) => {
    const p = pos(e.changedTouches ? e.changedTouches[0] : e);
    endDrag(p.x);
});

container.addEventListener("mouseleave", () => {
    swiping = false;
    isDragging = false;
});
