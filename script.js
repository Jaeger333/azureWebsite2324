const button = document.getElementById('button1');
const div = document.getElementById('div1');

let state = false; // Initial state

button.addEventListener('click', () => {
    state = !state; // Toggle the state
    if (state) {
        div.innerText = 'Hello World!'; // Change button text for state 1
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    } else {
        div.innerText = 'Hei Verden!'; // Change button text for state 2
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
})
