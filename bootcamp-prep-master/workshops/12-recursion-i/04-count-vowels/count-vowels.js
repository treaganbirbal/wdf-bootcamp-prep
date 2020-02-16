// YOUR CODE BELOW


function countVowels(sentence){
    if(sentence.length === 0){
        return 0
    }
    let count = 0;
    if(isAVowel(str[0])){
        count += 1;
    }
    count += countVowels(sentence.slice(1))
    return count;
  }

function isAVowel(char){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char)
}