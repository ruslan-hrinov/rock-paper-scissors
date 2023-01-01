const itemsShadow = () => {
  setTimeout(() => {
    const item = document.querySelectorAll('.item');
    const gameTable = document.querySelector('.game-table');
    const rockShadow = window.getComputedStyle(document.querySelector('.rock')).boxShadow;
    const paperShadow = window.getComputedStyle(document.querySelector('.paper')).boxShadow;
    const scissorsShadow = window.getComputedStyle(document.querySelector('.scissors')).boxShadow;
    const hideRemoveShadow = (element, status) => {
      if (status === 'hide') {
        element.style.boxShadow = 'none';
        element.style.transitionDuration = '0.8s';
        element.style.transform = "translate(-25%, -21%)";
      } else {
        if (element.className === 'item scissors') {
          element.style.boxShadow = scissorsShadow;
          element.style.transitionDuration = '0.6s';
          element.style.transform = "translate(-25%, -25%)";
        }
        if (element.className === 'item paper') {
          element.style.boxShadow = paperShadow;
          element.style.transitionDuration = '0.6s';
          element.style.transform = "translate(-25%, -25%)";
        };
        if (element.className === 'item rock') {
          element.style.boxShadow = rockShadow;
          element.style.transitionDuration = '0.6s';
          element.style.transform = "translate(-25%, -25%)";
        };
      };
    };
    item.forEach((item) => {
      item.addEventListener('mousemove', () => {
        if (!gameTable.getAttribute('data-game-status', 'in-game')) {
          hideRemoveShadow(item, 'hide')
        }
      });
      item.addEventListener('mouseout', () => {
        if (!gameTable.getAttribute('data-game-status', 'in-game')) {
          hideRemoveShadow(item, 'remove');
        }
      });
    });
  }, 1600);
};
export default itemsShadow;
