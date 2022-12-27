function getEmptyCells(numbers) {
  const array = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (numbers[i][j] === 0) {
        array.push({ row: i, col: j });
      }
    }
  }
  return array;
}
function startNewGame() {
  let initialNumbers = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  initialNumbers = addRandomCell(initialNumbers);
  initialNumbers = addRandomCell(initialNumbers);
  return initialNumbers;
}

function addRandomCell(numbers) {
  const nums = [...numbers];
  const arr = getEmptyCells(numbers);
  let cord = Math.floor(Math.random() * arr.length);

  nums[arr[cord].row][arr[cord].col] = 2;
  return nums;
}

function hasMoreSteps(numbers) {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      if (numbers[row][col] === numbers[row][col + 1]) return true;
    }
  }
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 3; row++) {
      if (numbers[row][col] === numbers[row + 1][col]) return true;
    }
  }
  return false;
}

function gameWon(numbers) {
  for (let row = 0; row < 4; row++) {
    if (numbers[row].find((element) => element === 2048)) return true;
  }
  return false;
}

export default {
  addRandomCell: addRandomCell,
  getEmptyCells: getEmptyCells,
  hasMoreSteps: hasMoreSteps,
  gameWon: gameWon,
  startNewGame: startNewGame,
};
