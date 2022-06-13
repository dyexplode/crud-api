console.log("Test run");

const commandInput = document.querySelector('.command-input');

document.querySelectorAll('.push').forEach((button) => {
    button.addEventListener('click', (event) => {
        fetch(`/user/${commandInput.value}`, { method: event.target.dataset.command });
    });
});

