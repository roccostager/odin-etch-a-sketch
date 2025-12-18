createGrid(16);

// Functions
function createGrid(n) {
    let grid_container = document.querySelector('.grid-container');
    let size = 100/n

    for (let i = 0; i < n**2; i++) {
        let grid_element = document.createElement('div');
        grid_element.className = 'grid-element';
        grid_element.style.width = `${size}%`, grid_element.style.height = `${size}%`;
        grid_container.appendChild(grid_element);
    }
}