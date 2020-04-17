var items = [];

function onSubmtButton() {
    let textMessage = document.querySelector('.todo-input').value;
    addItemBlock(textMessage);
    document.querySelector('.todo-input').value = '';
}

function addItemBlock(newTextMessage) {
    items.push(newTextMessage);
    saveToStorage(items);
    let messageDiv = document.createElement('div');
    messageDiv.innerText = newTextMessage;
    document.querySelector('.todo-list').appendChild(messageDiv);
}

function saveToStorage(items) {
    localStorage.setItem('items', JSON.stringify(items));
}

function getFromStorage(items) {
    let listString = localStorage.getItem('items');
    if (listString === null) {
        return [];
    } else {
        return JSON.parse(listString);
    }
}

function init() {
    getFromStorage().forEach(value => {
        addItemBlock(value);
    })
}

init();

document.querySelector('.btn').addEventListener('click', onSubmtButton);
