const modal = document.querySelector("#modal");
const close = document.querySelector(".close-btn");

if (close) {
  close.onclick = function () {
    modal.style.display = "none";
  };
}

export function callModal() {
  modal.style.display = "flex";
  modal.classList.add("animate");
}
