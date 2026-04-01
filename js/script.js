// UNTUK PERBANTIAN BG //
const bgslide = document.getElementById("bg-slide");
const images = [
  "src/bg1.webp",
  "src/bg2.webp",
  "src/bg3.webp",
  "src/bg4.webp"
];

let i = 0;
setInterval(() => {
  bgslide.style.backgroundImage = `url(${images[i]})`;
  i = (i + 1) % images.length;
}, 3000);































const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});


const openBtn = document.getElementById("openAdvanced");
const modal = document.getElementById("advanced-pop-up");
const closeBtn = document.querySelector(".close");

// buka modal
openBtn.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
});

// tutup modal (klik X)
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// klik luar modal
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

