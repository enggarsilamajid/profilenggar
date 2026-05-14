const initNavbar = () => {
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownList = document.getElementById('dropdown-list');

  if (!dropdownBtn || !dropdownList) return;

  dropdownBtn.addEventListener('click', (event) => {
    event.stopPropagation();

    const isOpen = dropdownList.classList.contains('show');

    if (isOpen) {
      dropdownList.classList.remove('show');
    } else {
      dropdownList.classList.add('show');
    }
  });

  window.addEventListener('click', (event) => {
    const isClickInside =
      dropdownBtn.contains(event.target) ||
      dropdownList.contains(event.target);

    if (!isClickInside) {
      dropdownList.classList.remove('show');
    }
  });
};

export default initNavbar;