const video = document.getElementById("camera");
const photo = document.getElementById("photo");

// Start camera
navigator.mediaDevices
    .getUserMedia({
        video: { width: { ideal: 720 }, height: { ideal: 1280 } },
    })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error("Camera error:", error);
    });

// Labels array
const labels = [
    "creatief",
    "vriendelijk",
    "ambitieus",
    "geduldig",
    "avontuurlijk",
    "analytisch",
    "optimistisch",
    "zelfverzekerd",
    "zorgzaam",
    "loyaal",
    "introvert",
    "extraverte",
    "empatisch",
    "spontaan",
    "nauwkeurig",
    "dapper",
    "rustig",
    "enthousiast",
    "eigenwijs",
    "betrouwbaar",
];

// Refresh button
const refresh = document.querySelector(".refresh button");
refresh.addEventListener("click", () => {
    document.querySelectorAll(".label").forEach((label) => {
        const r = Math.floor(Math.random() * labels.length);
        label.textContent = labels[r];
    });
});

// Take picture button
const click = document.querySelector(".click button");
click.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    photo.src = canvas.toDataURL("image/png");
    photo.style.display = "block";
    video.style.display = "none";
    refresh.style.display = "none";
    click.style.display = "none";
    document.querySelector(".link").style.display = "block";
});