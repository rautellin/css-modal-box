// Get modal element
const modal = document.getElementById("simpleModal");

// Get open modal button
const modalBtn = document.getElementById("modalBtn");

// Get close button
const closeBtn = document.getElementById("closeBtn");

// Listen for open click and open touch (on mobile decvices)
modalBtn.addEventListener("click", openModal);
modalBtn.addEventListener("touchstart", openModal);

// Listen for close click and open touch (on mobile decvices)
closeBtn.addEventListener("click", closeModal);
closeBtn.addEventListener("touchstart", closeModal);

// Listen for outside click and open touch (on mobile decvices)
window.addEventListener("click", outsideClick);
window.addEventListener("touchstart", outsideClick);

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// Function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}


