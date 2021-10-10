(() => {
  const refs = {
    openFranchiseBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseBtn: document.querySelector('[data-franchise-close]'),
    franchise: document.querySelector('[data-franchise]'),
  };

  refs.openFranchiseBtn.addEventListener('click', toggleMenu);
  refs.closeFranchiseBtn.addEventListener('click', toggleMenu);

  function toggleFranchise() {
    refs.franchise.classList.toggle('is-hidden');
  }
})();