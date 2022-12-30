import gameProcess from "./game-process";
const item = document.querySelectorAll('.item');
const gameTable = document.querySelector('.game-table');
const itemsMoveIntoPosition = () => {
  new Promise((resolve) => {
    item.forEach((element) => {
      if (element.className === 'item scissors') {
        let animation = element.animate([
          {
            transform: 'translate(-24%, -159%) rotate(-45deg)',
            filter: 'brightness(30%)'
          },
          {
            transform: 'translate(-25%, -25%) rotate(0deg)',
            filter: 'brightness(100%)'
          },
        ], {
          duration: 1500,
          easing: 'cubic-bezier(0.5, 0.5, 0.4, 1)',
          iterations: 1
        }
        );
        animation.finished.then(() => {
          element.style.transform = 'translate(-25%, -25%) rotate(0deg)';
          element.style.filter = 'brightness(100%)'
        });
      };
      if (element.className === 'item paper') {
        let animation = element.animate([
          {
            transform: 'translate(-141%, 25%) rotate(-45deg)',
            filter: 'brightness(30%)'
          },
          {
            transform: 'translate(-25%, -25%) rotate(0deg)',
            filter: 'brightness(100%)'
          },
        ], {
          duration: 1500,
          easing: 'cubic-bezier(0.5, 0.5, 0.4, 1)',
          iterations: 1
        }
        );
        animation.finished.then(() => {
          element.style.transform = 'translate(-25%, -25%) rotate(0deg)';
          element.style.filter = 'brightness(100%)'
        });
      };
      if (element.className === 'item rock') {
        let animation = element.animate([
          {
            transform: 'translate(83%, 25%) rotate(-45deg)',
            filter: 'brightness(30%)'
          },
          {
            transform: 'translate(-25%, -25%) rotate(0deg)',
            filter: 'brightness(100%)'
          },
        ], {
          duration: 1500,
          easing: 'cubic-bezier(0.5, 0.5, 0.4, 1)',
          iterations: 1
        }
        );
        animation.finished.then(() => {
          element.style.transform = 'translate(-25%, -25%) rotate(0deg)';
          element.style.filter = 'brightness(100%)'
          resolve()
        });
      };
    })
  }).then(() => {
    if (gameTable.getAttribute('data-game-status', 'in-game')) {
      gameTable.removeAttribute('data-game-status', 'in-game');
    }
    gameProcess();
  });
};


export default itemsMoveIntoPosition;
