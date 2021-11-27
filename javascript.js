function createGrid(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        const col = document.createElement('div');

        col.style.cssText = 'display: flex; flex: 1 0 0';

        container.appendChild(col);

        for (let n = 0; n < dimensions; n++) {
            const item = document.createElement('div');

            item.classList.add('items');
            item.style.cssText = 'flex: 1 0 0';

            col.appendChild(item);
        }
    }
}

function clearBoard() {
    items.forEach(item => {
        item.style.background = 'white';
    })
}

function randomColor() {
    return '#' + (Math.floor(Math.random()*16777215).toString(16));
}

const container = document.querySelector('.container');

createGrid(15);

const items = document.querySelectorAll('.items');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.background = randomColor();
    });
});

