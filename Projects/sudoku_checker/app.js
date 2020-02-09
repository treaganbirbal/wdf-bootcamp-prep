let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7]
];

//getRow: This function should accept two arguments: a sudoku grid (represented by an array of arrays) and a row index. The function should return an array containing the numbers in the specified row.

const getRow = (grid, rowIdx) => {
    //check to see if there are any rows in grid
  if(!grid.length){
      return;
  }
 //return an array with all elements in specific row---grid[rowIdx]
  return grid[rowIdx]
};

// console.log(getRow(puzzle, 0))

const getColumn = (grid, columnIdx) => {
    if(!grid.length){
        return
    }
    
}

