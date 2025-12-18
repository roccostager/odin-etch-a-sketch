let grid_container = document.querySelector('.grid-container');
grid_container.addEventListener('mouseover', handleTrail);

let special_brush = false;
let toggle_brush = document.getElementById('toggle-brush');
toggle_brush.addEventListener('click', () => {
    special_brush = !special_brush;
    toggle_brush.classList.toggle('special-brush');
})

createGrid(16);

let resize_button = document.getElementById('resize-button');
resize_button.addEventListener('click', () => {
    let input = parseInt(prompt("How big should the grid be?"));
    if (!input || input > 100) return;

    createGrid(input);
});

// Functions
function createGrid(n) {
    grid_container.innerHTML = '';

    let size = 100/n

    for (let i = 0; i < n**2; i++) {
        let grid_element = document.createElement('div');
        grid_element.className = 'grid-element';
        grid_element.style.width = `${size}%`, grid_element.style.height = `${size}%`;
        grid_container.appendChild(grid_element);
    }
}

function handleTrail(e) {
    let grid_element = e.target;
    if (grid_element == grid_container) return;

    grid_element.style.backgroundColor = special_brush ? generateRandomColor() : 'black';
}

function generateRandomColor() {
    let random_color = Math.floor(16777215 * Math.random()).toString(16);
    random_color = random_color.padStart(6, '0');
    console.log(random_color);
    return `#${random_color}`;
}