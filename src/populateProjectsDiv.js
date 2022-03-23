export default function populateProjectsDiv() {
    const projectsFrame = document.querySelector('#projects-wrapper');
    const projects = document.querySelector('#projects-array');

    projects.forEach(proj => {
        const newDiv = document.createElement('div');
        newDiv.appendChild(proj);
        projectsFrame.appendChild(newDiv);
    });
}