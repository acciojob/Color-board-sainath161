const container = document.getElementById('container');

// Create 800 squares
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red'; // Change the background color on hover
    });

    square.addEventListener('mouseout', () => {
        // Reset the background color after 1 second
        setTimeout(() => {
            square.style.backgroundColor = 'blue'; // Change it back to the original color
        }, 1000); // 1000 milliseconds = 1 second
    });

    container.appendChild(square);
}
