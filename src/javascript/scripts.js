function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
     sidebar.style.display = 'none' 
}

function showMoreProjects() {
    const moreProjects = document.querySelectorAll('.moreProjects')
    for (const project of moreProjects) {
        project.style.display = 'grid';
    }

    const moreProjectsButton = document.querySelector('.moreProjectsButton')
    moreProjectsButton.style.display = 'none';
}