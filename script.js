const container = document.querySelector('.container');

// Function to create a grid of boxes
function createBoxes() {
    for (let i = 0; i < 800; i++) {
        const box = document.createElement('div');
        box.className = 'square';
        container.appendChild(box);
    }
}

createBoxes();

// Add event listeners to reset the background color after 1 second
const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'lightcoral';
    });

    square.addEventListener('mouseout', () => {
        setTimeout(() => {
            square.style.backgroundColor = 'gray';
        }, 1000);
    });
});
