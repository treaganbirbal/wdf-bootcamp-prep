// YOUR CODE BELOW

function zeroDarkThirty(num){
    let numsArr = num.toString().split('')
    
    let noZerosArr = numsArr.filter(el => {
      return el !== '0'
    })
    let strOfNums = noZerosArr.join('');
    if(strOfNums.length === 0){
      return NaN
    }
    return Number(strOfNums)
  }
  