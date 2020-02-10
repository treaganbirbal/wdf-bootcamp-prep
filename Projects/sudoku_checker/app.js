// let puzzle = [
//   [8, 9, 5,   7, 4, 2,   1, 3, 6],
//   [2, 7, 1,   9, 6, 3,   4, 8, 5],
//   [4, 6, 3,   5, 8, 1,   7, 9, 2],

//   [9, 3, 4,   6, 1, 7,   2, 5, 8],
//   [5, 1, 7,   2, 3, 8,   9, 6, 4],
//   [6, 8, 2,   4, 5, 9,   3, 7, 1],

//   [1, 5, 9,   8, 7, 4,   6, 2, 3],
//   [7, 4, 6,   3, 2, 5,   8, 1, 9],
//   [3, 2, 8,   1, 9, 6,   5, 4, 7]
// ];

//-------getRow: This function should accept two arguments: a sudoku grid (represented by an array of arrays) and a row index. The function should return an array containing the numbers in the specified row.

const getRow = (grid, rowIdx) => {
    //check to see if there are any rows in grid
  if(!grid.length){
      return;
  }
 //return an array with all elements in specific row---grid[rowIdx]
  return grid[rowIdx]
};

// console.log(getRow(puzzle, 0)) => [8, 9, 5, 7, 4, 2, 1, 3, 6]

//------getColumn: This function should accept a sudoku grid and a column index. The function should return an array containing the numbers in the specified column.

const getColumn = (grid, columnIdx) => {
    //create an array to return 
    let columnArr = []
    //check to see if there are elements in grid, if columnIdx is within Bounds
    if(!grid.length || columnIdx >= grid.length || columnIdx < 0){
        throw new Error("Column Not Found!")
    }
    //loop through to get elements in column 
    //Each column will include elements of 0th array in grid...
    for(let i = 0; i < grid[0].length; i++){
     // ...push into columnsArr
        columnArr.push(grid[i][columnIdx])
    }
    //return an array with elements of specific column.
    return columnArr
}

// console.log(getColumn(puzzle, 3)) => [7, 9, 5, 6, 2, 4, 8, 3, 1]

//getGrid: This function should accept three arguments: a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids. The function should return an array with all the numbers in the specified subgrid.

let puzzle = [
    [8, 9, 5,   7, 4, 2,   1, 3, 6],
    [2, 7, 1,   9, 6, 3,   4, 8, 5],
    [4, 6, 3,   5, 8, 1,   7, 9, 2],
  
    [9, 3, 4,   6, 1, 7,   2, 5, 8],
    [5, 1, 7,   2, 3, 8,   9, 6, 4],
    [6, 8, 2,   4, 5, 9,   3, 7, 1],
  
    [1, 5, 9,   8, 7, 4,   6, 2, 3],
    [7, 4, 6,   3, 2, 5,   8, 1, 9],
    [3, 2, 8,   1, 9, 6,   5, 4, 7]
  ];

const getGrid = (grid, xCoordinate, yCoordinate) => {
    let topLeft
    let topCenter
    let topRight
    let midleft
    let midCenter
    let midRight
    let bottomLeft
    let bottomCenter
    let bottomRight
    let subGrid= []
  
    if(xCoordinate === 0 && yCoordinate === 0){
        for(let i = 0; i < grid.length; i++){
            subGrid.push(grid[i].slice(0,3))
        }
        topLeft = subGrid.slice(0,3).flat(1)
        return topLeft
    }
    if(xCoordinate === 1 && yCoordinate === 0){
        for(let i = 0; i < grid.length; i++){
            subGrid.push(grid[i].slice(3, 6))
            console.log(subGrid)
        }
        topMiddle = subGrid.slice(0,3).flat(1)
        return topMiddle
    }
    if(xCoordinate === 2 && yCoordinate === 0){
        for(let i = 0; i < grid.length; i++){
            subGrid.push(grid[i].slice(6, 9))
            console.log(subGrid)
        }
        topRight = subGrid.slice(0,3).flat(1)
        return topRight
    }
    if(xCoordinate === 0 && yCoordinate === 1){
        for(let i = 3; i < grid.length; i++){
            subGrid.push(grid[i].slice(0, 3))
            console.log(subGrid)
        }
        midLeft = subGrid.slice(0,3).flat(1)
        return midLeft
    }
    if(xCoordinate === 1 && yCoordinate === 1){
        for(let i = 3; i < grid.length; i++){
            subGrid.push(grid[i].slice(3, 6))
            console.log(subGrid)
        }
        midCenter = subGrid.slice(0,3).flat(1)
        return midCenter
    }
// console.log(topLeft)
}



console.log(getGrid(puzzle, 1, 1 )) // -> [ 7,4,2,9,6,3,5,8,1 ]




