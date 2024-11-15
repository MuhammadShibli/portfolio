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

// Example: Add event listeners for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetPage = event.target.getAttribute('data-file');
        loadContent(targetPage);
    });
});
