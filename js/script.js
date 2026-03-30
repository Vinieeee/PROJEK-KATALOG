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