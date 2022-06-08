(() => {
  const refs = {
    openMenuModalBtn: document.querySelector("[data-menu-modal-open]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openMenuModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();