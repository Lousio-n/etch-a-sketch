const container = document.querySelector('.container');
const generateGrid = document.querySelector('.generateGrid');
const value = document.querySelector('#value');
const input = document.querySelector('#sizeSlider')

value.textContent = input.value + "x" + input.value;

input.addEventListener('input', (e) => {
  value.textContent = e.target.value;
})

generateGrid.addEventListener('click', () => {
  container.replaceChildren();
  let val = document.querySelector('input').value;
  let gridSize = val;

  container.setAttribute('style', 'grid-template-columns: repeat(' + gridSize + ', 1fr);')

  for (let i = 0; i < gridSize * gridSize; i++ ) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
  }
})

container.addEventListener('mouseover', function (e) {
  e.target.style.background = 'black';
})