// YOUR CODE BELOW

const ticTacToe = {
      board: 
      [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      
      move: function(player, x, y){
        // for(let i = 0; i < this.board.length; i++){
          // for(let j = 0; j < this.board[i].length; j++){
        if(player === 'x'){
                if( x === 0 && y === 0){
                  this.board[0][0] = 'x'
                }
              if( x === 0 && y === 1){
                  this.board[0][1] = 'x'
                } 
              if( x === 0 && y === 2){
                  this.board[0][2] = 'x'
                } 
              if( x === 1 && y === 0){
                  this.board[1][0] = 'x'
                } 
              if( x === 1 && y === 1){
                  this.board[1][1] = 'x'
                } 
              if( x === 1 && y === 2){
                  this.board[1][2] = 'x'
                } 
              if( x === 2 && y === 0){
                  this.board[2][0] = 'x'
                } 
              if( x === 2 && y === 1){
                  this.board[2][1] = 'x'
                }
              if( x === 2 && y === 2){
                  this.board[2][2] = 'x'
                } 
                
         } 
        return this.board
      },
     
      clear: function(board){
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        console.log(this.board)
      }
    }