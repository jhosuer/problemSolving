function numberWords(str) {
  let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let newStr = str.split('');
  for(let index = 0; index < newStr.length; index++) {
    for (let newIndex = 0; newIndex < num.length; newIndex++){
      if(newStr[index] === newIndex.toString()) {
        newStr[index] = num[newStr[index]];

      }
   
    } 
  }
  let result = newStr.join(' ');
 return result;
}

numberWords('3264');
