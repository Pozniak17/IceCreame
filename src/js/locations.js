(() => {
    const refs = {
      openLocationsBtn: document.querySelector('[data-locations-open]'),
      closeLocationsBtn: document.querySelector('[data-locations-close]'),
      locations: document.querySelector('[data-locations]'),
    };
  
    refs.openLocationsBtn.addEventListener('click', toggleModal);
    refs.closeLocationsBtn.addEventListener('click', toggleModal);
  
    function toggleLocations() {
      refs.locations.classList.toggle('is-hidden');
    }
  })();