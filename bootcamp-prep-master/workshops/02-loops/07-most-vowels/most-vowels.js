// YOUR CODE BELOW

const mostVowels = (str) => {
  
    let currentWord = '';
    let currentVowelCount = 0;
    
    let maxWord = ''
    let maxVowelCount = 0;
    
    for(let i = 0; i < str.length; i++){
      let char = str[i];
      //if char is not a space or char is at the end of str
      if(char !== ' ' && i !== str.length - 1){
        currentWord += char;
       //if char is a vowel....
        if(isVowel(char)){
          //...increment vowelcount by 1
          currentVowelCount += 1
          console.log(currentWord)
        }
      } 
      //if char is a space or we are at the end of sentence...
      else {
        //...if the vowel count of current word is greater than max previous word...
        if(currentVowelCount > maxVowelCount){
          //...reassign the value of maxVowelCount to currentVowelCount...
          maxVowelCount = currentVowelCount
          //...reassing the value of maxWord to currentWord
          maxWord = currentWord
        }
        //reset currentWord && currentVowelCount for the next word
        currentWord = ''
        currentVowelCount = 0
      }
    }
  
     return maxWord 
  
  
  function isVowel(char){
      let vowels = 'aeiouAEIOU';
      if(vowels.indexOf(char) >= 0){
        return true
      } else {
        return false
      }
    }
  }