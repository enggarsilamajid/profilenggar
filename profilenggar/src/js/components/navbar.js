const initNavbar = () => {
  const dropdownButton = document.querySelector('.dropdown-btn');
  const dropdownMenu = document.querySelector('#dropdown-list');

  const navLinks = document.querySelectorAll('.nav-link');

  dropdownButton?.addEventListener('click', (event) => {
    event.stopPropagation();

    dropdownMenu.classList.toggle('show');
  });

  document.addEventListener('click', (event) => {
    const isInsideMenu = dropdownMenu.contains(event.target);

    const isButton = dropdownButton.contains(event.target);

    if (!isInsideMenu && !isButton) {
      dropdownMenu.classList.remove('show');
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      dropdownMenu.classList.remove('show');
    });
  });

  const sections = document.querySelectorAll('section');

  const activateNavOnScroll = () => {
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;

      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');

      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', activateNavOnScroll);

  const navbar = document.querySelector('.navbar');

  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll);
};

export default initNavbar;