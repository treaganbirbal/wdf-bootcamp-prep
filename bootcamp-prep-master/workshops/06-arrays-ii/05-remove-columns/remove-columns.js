// YOUR CODE BELOW

const removeColumns = (grid, numOfColumns) => {
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < numOfColumns; j++){
        grid[i].pop()
      }
    }
    return grid
  }