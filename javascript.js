function createGrid(dimensions) {
    while(container.firstChild)
        container.removeChild(container.firstChild);

    for (let i = 0; i < dimensions; i++) {
        const col = document.createElement('div');

        col.style.cssText = 'display: flex; flex: 1 0 0';
        col.classList.add('columns');

        container.appendChild(col);

        for (let n = 0; n < dimensions; n++) {
            const item = document.createElement('div');

            item.classList.add('items');
            item.style.cssText = 'flex: 1 0 0';

            col.appendChild(item);
        }
    }
    addListeners();
}

function addListeners() {
    items = document.querySelectorAll('.items');

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.background = randomColor();
        });
    });
}

function inputValue() {
    let value = prompt('Input value between 1 - 100: ');

    if (value >= 1 && value <= 100)
        return value;
    else 
        alert('Wrong value!');
}

function clearBoard() {
    items.forEach(item => {
        item.style.background = 'white';
    })
}

function randomColor() {
    return '#' + (Math.floor(Math.random()*16777215).toString(16));
}

var items = document.querySelectorAll('.items');

const container = document.querySelector('.container');

const buttonReset = document.querySelector('.reset');

buttonReset.addEventListener('click', clearBoard);

const buttonGrid = document.querySelector('.grid');

buttonGrid.addEventListener('click', () => {
    createGrid(inputValue());
});

createGrid(2);