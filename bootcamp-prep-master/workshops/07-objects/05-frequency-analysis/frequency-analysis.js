// YOUR CODE BELOW

function frequencyAnalysis(str){
    const charMap = {}
    if(!str.length){
      return
    }
    for(let i = 0; i < str.length; i++){
      let char = str[i]
      if(!charMap[char]){
        charMap[char] = 1
      } else {
        charMap[char]++
      }
    }
    
    console.log(charMap)
    return charMap
  }
  