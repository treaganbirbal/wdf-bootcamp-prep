// YOUR CODE BELOW

function makeGrid(numColumns, numRows){
    let grid = [];
    let row = [];
    for(let i = 0; i < numColumns; i++){
      row.push(i+1);
    }
    for(let j = 0; j < numRows; j++){
      grid.push(row);
    }  
    
    //return a two-dimensional array that represents a grid of the given dimensions.
    return grid;
  }
  