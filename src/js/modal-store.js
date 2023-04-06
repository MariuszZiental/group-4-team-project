(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-store-open]'),
    closeModalBtn: document.querySelector('[data-modal-store-close]'),
    modal: document.querySelector('[data-modal-store]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
