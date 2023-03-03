const container = document.querySelector('.container');
const changeSize = document.querySelector('.changeSize');

changeSize.addEventListener('click', () => {
  let gridSize = prompt('Choose a size')

  container.setAttribute('style', 'grid-template-columns: repeat(' + gridSize + ', 1fr);')

  for (let i = 0; i < gridSize * gridSize; i++ ) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
  }
})



container.addEventListener('mouseover', function (e) {
  e.target.classList.add('gridBlack');
})