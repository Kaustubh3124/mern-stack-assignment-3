// script.js
document.addEventListener('DOMContentLoaded', () => {
    const greetingHeader = document.getElementById('greeting-header');
    const nameInput = document.getElementById('name-input');
    const greetButton = document.getElementById('greet-button');

    greetButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            greetingHeader.textContent = `Hello, ${name}`;
        } else {
            greetingHeader.textContent = 'Hello'; // Reset if input is empty
        }
    });

    const redBox = document.getElementById('red-box');
    const blueBox = document.getElementById('blue-box');
    const greenBox = document.getElementById('green-box');
    const yellowBox = document.getElementById('yellow-box');

    redBox.addEventListener('click', () => {
        redBox.style.backgroundColor = 'red';
        redBox.style.color = 'white';
    });

    blueBox.addEventListener('click', () => {
        blueBox.style.backgroundColor = 'blue';
        blueBox.style.color = 'white';
    });

    greenBox.addEventListener('click', () => {
        greenBox.style.backgroundColor = 'green';
        greenBox.style.color = 'white';
    });

    yellowBox.addEventListener('click', () => {
        yellowBox.style.backgroundColor = 'yellow';
        yellowBox.style.color = 'black'; // Text should be black for better visibility on yellow
    });
});
