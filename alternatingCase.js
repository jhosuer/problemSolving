function alternatingCase(str) {
  let newStr = str.split('');
  for(let index = 0; index < newStr.length; index++) {
   if(index % 2 == 0) {
     newStr[index] = newStr[index].toLowerCase();
   }
   else {
     newStr[index] = newStr[index].toUpperCase();
   }
  }
  
  return newStr;
}

alternatingCase('onomatopoeia');
//oNoMaToPoEiA