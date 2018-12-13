function interpret(value,operator,list) {
  let result = value;
  for(let index = 0; index < operator.length; index++) {
      if(operator[index] == '+') {
        result += list[index];
      }
      else if(operator[index] == '-') {
        result -= list[index];
      }
      else if(operator[index] == '*') {
        result *= list[index];
      }
      else {
        return -1;
      }
      
  }
  return result;
}

interpret(1, ["+", "*"], [1, 3]);