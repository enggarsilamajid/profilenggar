import '../css/style.css';

import initNavbar from './components/navbar';
import renderProjects from './components/projects';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProjects();
});