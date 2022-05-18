function solve(input) {
  let concatenatedString = (input.shift() + input.shift()).toLowerCase();
  let thirdString = input.shift().toUpperCase();
  let splittedThirdString = thirdString.split("")

  let splittedText = concatenatedString.split("")
  for (let letter of splittedText) {
     if((isVowel(letter) === true)){
        concatenatedString = concatenatedString.replace(letter,splittedThirdString.shift())
     }
     if(splittedThirdString.length === 0){
        splittedThirdString = thirdString.split("")
         
     }
  }
  let finalArr = Array.from(concatenatedString)
  
  console.log(`Your generated password is ${finalArr.reverse().join("")}`)
  
  
  function isVowel(char) {
    let vowels = ["a", "e", "i", "o", "u"];
    let isVowel = false;

    for (let vowel of vowels) {
      if (vowel == char) {
        isVowel = true;
      }
    }
    return isVowel;
  }

  
}

solve(["ilovepizza", "ihatevegetables", "orange"]);
