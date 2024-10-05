function showContent(section) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    // Map sections to their corresponding HTML files
    const sectionFiles = {
        home: 'pages/home.html',
        location: 'pages/location.html',
        caplab: 'pages/caplab.html',
    };

    // Fetch and display the content
    if (sectionFiles[section]) {
        fetch(sectionFiles[section])
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                content.innerHTML = '<p>Error loading content.</p>';
            });
    }
}

// Load homepage initially
window.addEventListener('DOMContentLoaded', () => {
    showContent('home');
});