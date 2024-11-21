function loadContent(fileName) {
    fetch(`content/${fileName}.md`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}.md`);
            }
            return response.text();
        })
        .then(markdown => {
            const converter = new showdown.Converter();
            const html = converter.makeHtml(markdown);
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById('content').innerHTML = `<p>Content not found: ${fileName}</p>`;
        });
}

// Load default content (README.md) on page load
document.addEventListener('DOMContentLoaded', () => {
    loadContent('README'); // Default page
});

// loading project page as portfolio
function loadProjects() {
    fetch('data/projects.json')
        .then(response => response.json())
        .then(projects => {
            const content = document.getElementById('content');
            content.innerHTML = ''; // Clear current content

            const projectGrid = document.createElement('div');
            projectGrid.className = 'project-grid';

            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';

                projectCard.innerHTML = `
                    <img src="${project.image}" alt="${project.name}" class="project-image">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank" class="project-link">View Details</a>
                `;

                projectGrid.appendChild(projectCard);
            });

            content.appendChild(projectGrid);
        })
        .catch(error => {
            console.error('Error loading projects:', error);
            document.getElementById('content').innerHTML = '<p>Failed to load projects.</p>';
        });
}

//projects link to loadProjects

document.getElementById('projects-link').addEventListener('click', (event) => {
    event.preventDefault();
    loadProjects();
});
