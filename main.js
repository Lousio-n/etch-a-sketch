const container = document.querySelector('.container');
const generateGrid = document.querySelector('.generateGrid');
const eraseGridButton = document.querySelector('.eraseGrid');
const value = document.querySelector('#value');
const input = document.querySelector('#sizeSlider')
const colorCheckbox = document.getElementById('colorCheckbox');
const opacityCheckbox = document.getElementById('opacityCheckbox');

function getRandomColor() {
  return('#' + Math.floor(Math.random()*16777215).toString(16));
}

value.textContent = input.value + "x" + input.value;

input.addEventListener('input', (e) => {
  value.textContent = e.target.value + "x" + e.target.value;
})

function makeGrid() {
  container.replaceChildren();
  let gridSize = input.value;

  container.setAttribute('style', 'grid-template-columns: repeat(' + gridSize + ', 1fr);')

  for (let i = 0; i < gridSize * gridSize; i++ ) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
  }
}

makeGrid();

generateGrid.addEventListener('click', () => {
  makeGrid()
})

eraseGridButton.addEventListener('click', () => {
  eraseGrid('white');
})

function eraseGrid(color) {
  let gridChildren = container.children;
  for (let i = 0; i < gridChildren.length; i++) {
    let child = gridChildren[i];
    child.style.background = color; 
  }
}

container.addEventListener('mouseover', function (e) {
  if (colorCheckbox.checked === true) {
    e.target.style.background = getRandomColor();
  } else {
    e.target.style.background = 'black';
  }
})