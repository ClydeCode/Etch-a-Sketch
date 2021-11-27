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



