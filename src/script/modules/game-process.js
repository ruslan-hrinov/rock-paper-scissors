import itemsMoveIntoPosition from "./itemsMoveIntoPosition";
const gameProcess = () => {
  const lastSwitchSound = new Audio('https://www.fesliyanstudios.com/play-mp3/5269');
  const item = document.querySelectorAll('.item');
  const gameTable = document.querySelector('.game-table');
  const resultsTable = document.querySelector('.results-table');
  const firstScore = document.querySelector('.first-score-table .score');
  const firstScoreTable = document.querySelector('.first-score-table');
  let winScore = +firstScore.getAttribute('data-score');
  const secondScore = document.querySelector('.second-score-table .score');
  const secondScoreTable = document.querySelector('.second-score-table');
  let loseScore = +firstScore.getAttribute('data-score');
  let elementsWithoutEvent = [];
  const readyToStartNewGame = () => {
    item.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        game(element)
      }, {
        once: true
      })
    })
  }
  const game = (elementWithEvent) => {
    new Promise((resolve) => {
      if (!gameTable.getAttribute('data-game-status')) {
        gameTable.setAttribute('data-game-status', 'in-game');
        item.forEach((element) => {
          if (element != elementWithEvent) {
            elementsWithoutEvent.push(element);
          }
        });
        const firstElementAnimation = elementsWithoutEvent[0].animate([
          { filter: 'brightness(100%)' },
          { filter: 'brightness(30%)' },
        ], {
          duration: 1000,
          iterations: 1
        });
        firstElementAnimation.finished.then(() => {
          elementsWithoutEvent[0].style.filter = 'brightness(30%)';
          resolve()
        });
        const secondElementAnimation = elementsWithoutEvent[1].animate([
          { filter: 'brightness(100%)' },
          { filter: 'brightness(30%)' },
        ], {
          duration: 1000,
          iterations: 1
        });
        secondElementAnimation.finished.then(() => {
          elementsWithoutEvent[1].style.filter = 'brightness(30%)';
          resolve()
        });
      };
    }).then(() => {
      new Promise((resolve) => {
        if (elementWithEvent.className === 'item scissors') {
          const newScissorsItem = document.createElement('div');
          newScissorsItem.classList.add('item');
          newScissorsItem.classList.add('scissors');
          newScissorsItem.innerHTML = '<img src="src/images/icon-scissors.svg">';
          newScissorsItem.setAttribute('data-clone', '');
          gameTable.append(newScissorsItem);
          elementWithEvent.style.filter = 'brightness(30%)';
          newScissorsItem.style.boxShadow = 'none';
          elementWithEvent.style.boxShadow = '0 8px rgb(180, 90, 174) , 0 6px rgb(113 113 113 / 42%) inset';
          newScissorsItem.style.transform = 'translate(-25%, -25%) rotate(0deg)';
          const animation = newScissorsItem.animate([
            { transform: 'translate(-25%, -25%) rotate(0deg)' },
            { transform: 'translate(-24%, -159%) rotate(-45deg)' },
          ], {
            duration: 750,
            iterations: 1
          });
          animation.finished.then(() => {
            newScissorsItem.style.transform = 'translate(-24%, -159%) rotate(-45deg)';
            newScissorsItem.style.zIndex = '-1';
            resolve()
          });
        };
        if (elementWithEvent.className === 'item paper') {
          const newPaperItem = document.createElement('div');
          newPaperItem.classList.add('item');
          newPaperItem.classList.add('paper');
          newPaperItem.innerHTML = '<img src="src/images/icon-paper.svg">';
          newPaperItem.setAttribute('data-clone', '');
          gameTable.append(newPaperItem);
          elementWithEvent.style.filter = 'brightness(30%)';
          newPaperItem.style.boxShadow = 'none';
          elementWithEvent.style.boxShadow = '0 8px rgb(12, 125, 98) , 0 6px rgb(113 113 113 / 42%) inset';
          newPaperItem.style.transform = 'translate(-25%, -25%) rotate(0deg)';
          const animation = newPaperItem.animate([
            { transform: 'translate(-25%, -25%) rotate(0deg)' },
            { transform: 'translate(-141%, 25%) rotate(-45deg)' },
          ], {
            duration: 750,
            iterations: 1
          });
          animation.finished.then(() => {
            newPaperItem.style.transform = 'translate(-141%, 25%) rotate(-45deg)';
            newPaperItem.style.zIndex = '-1';
            resolve()
          })
        };
        if (elementWithEvent.className === 'item rock') {
          const newRockItem = document.createElement('div');
          newRockItem.classList.add('item');
          newRockItem.classList.add('rock');
          newRockItem.innerHTML = '<img src="src/images/icon-rock.svg">';
          newRockItem.setAttribute('data-clone', '');
          gameTable.append(newRockItem);
          elementWithEvent.style.filter = 'brightness(30%)';
          newRockItem.style.boxShadow = 'none';
          elementWithEvent.style.boxShadow = '0 8px rgb(211, 150, 15) , 0 6px rgb(113 113 113 / 42%) inset';
          newRockItem.style.transform = 'translate(-25%, -25%) rotate(0deg)';
          const animation = newRockItem.animate([
            { transform: 'translate(-25%, -25%) rotate(0deg)' },
            { transform: 'translate(83%, 25%) rotate(-45deg)' },
          ], {
            duration: 750,
            iterations: 1
          });
          animation.finished.then(() => {
            newRockItem.style.transform = 'translate(83%, 25%) rotate(-45deg)';
            newRockItem.style.zIndex = '-1';
            resolve();
          });
        };
      }).then(() => {
        new Promise((resolve) => {
          function randomInteger(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand)
          };
          let randomNumber = randomInteger(10, 15);
          let computerItem = 0;
          function itemGenerator(number) {
            if (number < 2) { ++computerItem } else {
              computerItem = 0
            };
            return computerItem;
          };
          function recursion(randomNumber, computerItem) {
            setTimeout(() => { item[computerItem].style.filter = 'brightness(70%)' }, 120);
            setTimeout(() => { item[computerItem].style.filter = 'brightness(30%)' }, 500);
            randomNumber -= 1;
            let currentComputerItem = itemGenerator(computerItem);
            setTimeout(() => {
              if (randomNumber > 1) {
                recursion(randomNumber, currentComputerItem)
              } else {
                setTimeout(() => {
                  item[currentComputerItem].style.filter = 'brightness(100%)'
                  item[currentComputerItem].style.boxShadow = 'none';
                  item[currentComputerItem].style.transitionDuration = '0.8s';
                  item[currentComputerItem].style.transform = "translate(-25%, -21%)";
                  lastSwitchSound.play();
                  resolve(currentComputerItem);
                }, 100);
              }
            }, 320)
          }
          setTimeout(() => { recursion(randomNumber, computerItem); }, 400);
        }).then((currentComputerItem) => {
          new Promise((resolve) => {
            setTimeout(() => {
              if (elementWithEvent.className == 'item rock' && currentComputerItem == 2) {
                resultsTable.innerHTML = 'YOU WON'; resultsTable.classList.add('won');
                winScore += 1; firstScore.innerHTML = winScore;
                firstScoreTable.classList.add('active');
                firstScore.setAttribute('data-score', winScore);
              }
              else if (elementWithEvent.className == 'item rock' && currentComputerItem == 1) {
                resultsTable.innerHTML = 'YOU LOSE'; resultsTable.classList.add('lose');
                loseScore += 1; secondScore.innerHTML = loseScore;
                secondScoreTable.classList.add('active');
                secondScore.setAttribute('data-score', loseScore);
              }
              else if (elementWithEvent.className == 'item rock') {
                resultsTable.innerHTML = 'DRAW';
                resultsTable.classList.add('draw');
              };
              if (elementWithEvent.className == 'item paper' && currentComputerItem == 0) {
                resultsTable.innerHTML = 'YOU WON'; resultsTable.classList.add('won');
                winScore += 1; firstScore.innerHTML = winScore;
                firstScoreTable.classList.add('active');
                firstScore.setAttribute('data-score', winScore);
              } else if (elementWithEvent.className == 'item paper' && currentComputerItem == 2) {
                resultsTable.innerHTML = 'YOU LOSE'; resultsTable.classList.add('lose');
                loseScore += 1; secondScore.innerHTML = loseScore;
                secondScoreTable.classList.add('active');
                secondScore.setAttribute('data-score', loseScore);
              } else if (elementWithEvent.className == 'item paper') {
                resultsTable.innerHTML = 'DRAW';
                resultsTable.classList.add('draw');
              };
              if (elementWithEvent.className == 'item scissors' && currentComputerItem == 1) {
                resultsTable.innerHTML = 'YOU WON'; resultsTable.classList.add('won');
                winScore += 1; firstScore.innerHTML = winScore;
                firstScoreTable.classList.add('active');
                firstScore.setAttribute('data-score', winScore);
              }
              else if (elementWithEvent.className == 'item scissors' && currentComputerItem == 0) {
                resultsTable.innerHTML = 'YOU LOSE'; resultsTable.classList.add('lose');
                loseScore += 1; secondScore.innerHTML = loseScore;
                secondScoreTable.classList.add('active');
                secondScore.setAttribute('data-score', loseScore);
              }
              else if (elementWithEvent.className == 'item scissors') {
                resultsTable.innerHTML = 'DRAW';
                resultsTable.classList.add('draw');
              };
              resolve()
            }, 1000);
          });
        }).then(() => {
          new Promise((resolve) => {
            setTimeout(() => {
              item.forEach((element) => {
                element.style.transitionDuration = 'unset';
                if (element.className === 'item scissors') {
                  let animation = element.animate([
                    { transform: 'translate(-25%, -25%) rotate(0deg)' },
                    {
                      transform: 'translate(-24%, -159%) rotate(-45deg)',
                      filter: 'brightness(30%)'
                    },
                  ], {
                    duration: 1700,
                    easing: 'cubic-bezier(0.5, 0.5, 0.4, 1)',
                    iterations: 1
                  }
                  );
                  animation.finished.then(() => {
                    element.style.transform = 'translate(-24%, -159%) rotate(-45deg)';
                    element.style.filter = 'brightness(30%)';
                    document.querySelector('[data-clone]').remove();
                    resolve();
                  });
                };
                if (element.className === 'item paper') {
                  let animation = element.animate([
                    { transform: 'translate(-25%, -25%) rotate(0deg)' },
                    {
                      transform: 'translate(-141%, 25%) rotate(-45deg)',
                      filter: 'brightness(30%)'
                    },
                  ], {
                    duration: 1700,
                    easing: 'cubic-bezier(0.5, 0.5, 0.4, 1)',
                    iterations: 1
                  }
                  );
                  animation.finished.then(() => {
                    element.style.transform = 'translate(-141%, 25%) rotate(-45deg)';
                    element.style.filter = 'brightness(30%)';
                  });
                };
                if (element.className === 'item rock') {
                  let animation = element.animate([
                    { transform: 'translate(-25%, -25%) rotate(0deg)' },
                    {
                      transform: 'translate(83%, 25%) rotate(-45deg)',
                      filter: 'brightness(30%)'
                    },
                  ], {
                    duration: 1700,
                    easing: 'cubic-bezier(0.5, 0.5, 0.4, 1)',
                    iterations: 1
                  }
                  );
                  animation.finished.then(() => {
                    element.style.transform = 'translate(83%, 25%) rotate(-45deg)';
                    element.style.filter = 'brightness(30%)';
                  });
                };
              });
            }, 3000)
          }).then(() => {
            new Promise((resolve) => {
              resultsTable.innerHTML = '';
              if (resultsTable.classList.contains('lose')) {
                resultsTable.classList.remove('lose');
                secondScoreTable.classList.remove('active');
              };
              if (resultsTable.classList.contains('won')) {
                resultsTable.classList.remove('won');
                firstScoreTable.classList.remove('active');
              };
              if (resultsTable.classList.contains('draw')) {
                resultsTable.classList.remove('draw');
              };
              item.forEach((element) => {
                if (element.className === 'item scissors') {
                  element.style.boxShadow = '0 8px rgb(180, 90, 174) , 0 6px rgb(113 113 113 / 42%) inset';
                };
                if (element.className === 'item paper') {
                  element.style.boxShadow = '0 8px rgb(12, 125, 98) , 0 6px rgb(113 113 113 / 42%) inset';
                };
                if (element.className === 'item rock') {
                  element.style.boxShadow = '0 8px rgb(211, 150, 15) , 0 6px rgb(113 113 113 / 42%) inset';
                };
              });
              resolve()
            }).then(() => {
              itemsMoveIntoPosition();
            })
          });
        });
      });
    });
  }
  readyToStartNewGame();
};

export default gameProcess;
