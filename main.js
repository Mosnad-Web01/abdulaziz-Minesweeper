// // const input = [

function minesweeperBoard(inputBoard) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  return inputBoard.map((row, rowIndex) => 
    row.map((cell, colIndex) => {
      if (cell === 1) return 9;
      
      let mineCount = 0;
      directions.forEach(([dr, dc]) => {
        const r = rowIndex + dr;
        const c = colIndex + dc;
        if (r >= 0 && r < inputBoard.length && c >= 0 && c < row.length && inputBoard[r][c] === 1) {
          mineCount++;
        }
      });
      
      return mineCount;
    })
  );
}

// Example input
const inputBoard = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];

// Get and print the output board
const outputBoard = minesweeperBoard(inputBoard);
outputBoard.forEach(row => console.log(row));