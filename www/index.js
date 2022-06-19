console.log("Test run");

const commandInput = document.querySelector('.command-input');
const resultMemo = document.querySelector('#result');
const inputMemo = document.querySelector('#inputMemo');

document.querySelectorAll('.push').forEach((button) => {
    button.addEventListener('click', async (event) => {
        let b;
        if (event.target.dataset.command !== 'GET'){
        b = fetch(`api/users/${commandInput.value}`, { method: event.target.dataset.command, body: inputMemo.value })
        } else {
        b = fetch(`api/users/${commandInput.value}`, { method: event.target.dataset.command })
        }
        b.then((resp) => {
            return resp.json();
        })
        .then((potv) => {
            resultMemo.innerHTML = `<code style="width: 100%">${JSON.stringify(potv)}</code>`;
        });
    });
});

