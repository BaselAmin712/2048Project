function handleArrowRight(arr, score) {
  const array = [...arr];
  let emptyCellQueue = [];
  let tempCords;
  for (let row = 0; row < 4; row++) {
    for (let col = 3; col >= 0; col--) {
      if (array[row][col] === 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] !== 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  for (let rows = 0; rows < 4; rows++) {
    for (let cols = 0; cols < 3; cols++) {
      if (array[rows][cols] === array[rows][cols + 1]) {
        array[rows][cols + 1] *= 2;
        score += array[rows][cols + 1];
        array[rows][cols] = 0;
        cols++;
      }
    }
  }
  emptyCellQueue = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 3; col >= 0; col--) {
      if (array[row][col] === 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] !== 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  return { array, score };
}

function handleArrowLeft(arr, score) {
  const array = [...arr];
  let emptyCellQueue = [];
  let tempCords;
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (array[row][col] === 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] !== 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  for (let rows = 0; rows < 4; rows++) {
    for (let cols = 3; cols > 0; cols--) {
      if (array[rows][cols] === array[rows][cols - 1]) {
        array[rows][cols - 1] *= 2;
        score += array[rows][cols - 1];
        array[rows][cols] = 0;
        cols--;
      }
    }
  }
  emptyCellQueue = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (array[row][col] === 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] !== 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }
  return { array, score };
}

function handleArrowDown(arr, score) {
  const array = [...arr];
  let emptyCellQueue = [];
  let tempCords;
  for (let col = 0; col < 4; col++) {
    for (let row = 3; row >= 0; row--) {
      if (array[row][col] === 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] !== 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  for (let cols = 0; cols < 4; cols++) {
    for (let rows = 0; rows < 3; rows++) {
      if (array[rows][cols] === array[rows + 1][cols]) {
        array[rows + 1][cols] *= 2;
        score += array[rows + 1][cols];
        array[rows][cols] = 0;
        rows++;
      }
    }
  }
  emptyCellQueue = [];
  for (let col = 0; col < 4; col++) {
    for (let row = 3; row >= 0; row--) {
      if (array[row][col] === 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] !== 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  return { array, score };
}

function handleArrowUp(arr, score) {
  const array = [...arr];
  let emptyCellQueue = [];
  let tempCords;
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      if (array[row][col] === 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] !== 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  for (let cols = 0; cols < 4; cols++) {
    for (let rows = 3; rows > 0; rows--) {
      if (array[rows][cols] === array[rows - 1][cols]) {
        array[rows - 1][cols] *= 2;
        score += array[rows - 1][cols];
        array[rows][cols] = 0;
        rows--;
      }
    }
  }
  emptyCellQueue = [];
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      if (array[row][col] === 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] !== 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  return { array, score };
}
export default {
  arrowDown: handleArrowDown,
  arrowUp: handleArrowUp,
  arrowRight: handleArrowRight,
  arrowLeft: handleArrowLeft,
};
