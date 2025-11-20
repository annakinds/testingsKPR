const container = document.getElementById("cardContainer");
let startX = 0;
let isDragging = false;
let currentCard = null;

const topCard = () => {
    return container.querySelector(".card:last-child");
}

const startDrag = (x) => {
    currentCard = topCard();
    if (!currentCard) return;
    startX = x;
    isDragging = true;
    currentCard.style.transition = "none";
}

const moveDrag = (x) => {
    if (!isDragging || !currentCard) return;
    const dx = x - startX;
    currentCard.style.transform = `translateX(${dx}px) rotate(${dx / 10}deg)`;
}

const endDrag = (x) => {
    if (!isDragging || !currentCard) return;
    const dx = x - startX;
    const willSwipe = Math.abs(dx) > 50;

    currentCard.style.transition = "transform 0.4s ease, opacity 0.4s ease";

    if (willSwipe) {
        const dir = dx > 0 ? 1 : -1;
        currentCard.style.transform = `translateX(${dir * 1000}px) rotate(${dir * 45}deg)`;
        currentCard.style.opacity = "0";
        setTimeout(() => {
            currentCard.remove();
            currentCard = null;
        }, 400);
    } else {
        currentCard.style.transform = "";
    }

    isDragging = false;
}

// Desktop
container.addEventListener("mousedown", e => startDrag(e.clientX));
container.addEventListener("mousemove", e => moveDrag(e.clientX));
container.addEventListener("mouseup", e => endDrag(e.clientX));
container.addEventListener("mouseleave", e => endDrag(e.clientX));

// Touch
container.addEventListener("touchstart", e => startDrag(e.touches[0].clientX));
container.addEventListener("touchmove", e => moveDrag(e.touches[0].clientX));
container.addEventListener("touchend", e => endDrag(e.changedTouches[0].clientX));
