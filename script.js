let container = document.getElementById('container');

function createGrid(rows, columns) {
  if (rows > 48 || columns > 48) return;

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);

  for (i = 0; i < rows * columns; i++) {
    let gridItem = document.createElement('div');

    container.appendChild(gridItem).className = 'grid-item';

    gridItem.addEventListener('mouseover', e => {
      e.target.style.backgroundColor = 'black';
    });
  }
}

function resetGrid() {
  removeElements();
  const rows = prompt('Enter your desired grid size (rows and columns):');
  const columns = rows;

  createGrid(rows, columns);
}

function removeElements() {
  const elements = document.getElementsByClassName('grid-item');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

document.getElementById('reset').onclick = resetGrid;

createGrid(16, 16);

// const container = document.getElementById('container');

// function makeRows(rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (c = 0; c < rows * cols; c++) {
//     let cell = document.createElement('div');
//     cell.innerText = c + 1;
//     container.appendChild(cell).className = 'grid-item';
//   }
// }

// makeRows(16, 16);
