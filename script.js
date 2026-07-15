document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  function setActiveSection(target) {
    sections.forEach(section => section.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));

    const targetSection = document.getElementById(target);
    const targetLink = document.querySelector(`.nav-link[data-target="${target}"]`);

    if (targetSection) targetSection.classList.add('active');
    if (targetLink) targetLink.classList.add('active');

    if (window.innerWidth <= 900) {
      sidebar.classList.remove('open');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-target');
      setActiveSection(target);
    });
  });

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  window.scrollToSection = (id) => setActiveSection(id);
});

