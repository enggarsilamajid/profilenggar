import projects from '../data/projects';

const projectsGrid = document.querySelector('#projects-grid');

const renderProjects = () => {
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
          </div>

          <div class="project-content">
            <h3>${project.title}</h3>

            <p>
              ${project.description}
            </p>

            <div class="project-tech">
              ${project.tech
                .map(
                  (tech) => `
                    <span>${tech}</span>
                  `
                )
                .join('')}
            </div>

            <div class="project-links">
              <a href="${project.github}" target="_blank">
                GitHub
              </a>

              <a href="${project.demo}" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
};

export default renderProjects;