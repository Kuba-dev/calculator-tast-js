const modal = document.querySelector("#modal");
const close = document.querySelector(".close-btn");

if (close) {
  close.onclick = function () {
    modal.classList.remove("modal-open");
  };
}

export function callModal() {
  modal.classList.add("modal-open");
  modal.classList.add("animate");
}
