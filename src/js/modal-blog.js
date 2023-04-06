(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-blog-open]'),
    closeModalBtn: document.querySelector('[data-modal-blog-close]'),
    modal: document.querySelector('[data-modal-blog]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
