const itemsShadow = () => {
  setTimeout(() => {
    const item = document.querySelectorAll('.item');
    const gameTable = document.querySelector('.game-table');
    const hideRemoveShadow = (element, status) => {
      if (status === 'hide') {
        element.style.boxShadow = 'none';
        element.style.transitionDuration = '0.8s';
        element.style.transform = "translate(-25%, -21%)";
      } else {
        if (element.className === 'item scissors') {
          element.style.boxShadow = '0 8px rgb(180, 90, 174) , 0 6px rgb(113 113 113 / 42%) inset';
          element.style.transitionDuration = '0.6s';
          element.style.transform = "translate(-25%, -25%)";
        }
        if (element.className === 'item paper') {
          element.style.boxShadow = '0 8px rgb(12, 125, 98) , 0 6px rgb(113 113 113 / 42%) inset';
          element.style.transitionDuration = '0.6s';
          element.style.transform = "translate(-25%, -25%)";
        };
        if (element.className === 'item rock') {
          element.style.boxShadow = '0 8px rgb(211, 150, 15) , 0 6px rgb(113 113 113 / 42%) inset';
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
          hideRemoveShadow(item, 'remove')
        }
      });
    });
  }, 1600);
};

export default itemsShadow;
