function inverseWord(str) {
  let newStr = str.split(''); 
  for(let index = 0; index < newStr.length; index++) {
    if(newStr[index] === newStr[index].toUpperCase()) {
      newStr[index] = newStr[index].toLowerCase();
      
    }
    else if(newStr[index] === newStr[index].toLowerCase()){
      newStr[index] = newStr[index].toUpperCase();
    }
  }
  //return str.split('');
  let inverse = newStr.join('');
  return inverse;
}

inverseWord('Mr. Ben');