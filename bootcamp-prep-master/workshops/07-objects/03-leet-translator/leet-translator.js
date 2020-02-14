let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW

function leetTranslator(word){
 const dict = {};
 for(let i = 0; i < letters.length; i++){
     dict[letters[i]] = leetChars[i];
 }

  let casedWord = word.toLowerCase();
  let leetWord = '';
 for(let j = 0; j < casedWord.length; j++){
     leetWord += dict[casedWord[j]]
 }
 return leetWord;
}


console.log(leetTranslator('yerrrrrs'))
