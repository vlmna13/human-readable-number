module.exports = function toReadable (number) {
    let units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
      };
      let dozenOne = {
          10: 'ten',
          11: 'eleven',
          12: 'twelve',
          13: 'thirteen', 
          14: 'fourteen',
          15: 'fifteen',
          16: 'sixteen',
          17: 'seventeen',
          18: 'eighteen',
          19: 'nineteen',
      }
      let  dozenTwo = {
          2: 'twenty',
          3: 'thirty',
          4: 'forty',
          5: 'fifty',
          6: 'sixty',
          7: 'seventy',
          8: 'eighty',
          9: 'ninety'
      }       
  
    if (number < 10) {
    return units[number]
    }
    if (number >= 10 && number< 20) {
      console.log(dozenOne[number])
      return dozenOne[number]
    }
    if (number >=20 && number <= 99) {
    let strNumber = number.toString();
      let firstNumber = +strNumber[0];
      let secondNumber = +strNumber[1];
          if (number % 10 === 0) {
        return dozenTwo[firstNumber]
      }
      console.log(`${dozenTwo[firstNumber]} ${units[secondNumber]}`)
      return (`${dozenTwo[firstNumber]} ${units[secondNumber]}`)
  
    }
    if (number >= 100 && number <= 999) {
      let strNumber = number.toString();
      let firstNumber = +strNumber[0];
      let secondNumber = +strNumber[1];
      let sirdNumber = +strNumber[2];
      let doublNumber = +(strNumber.substring(1));
        if (secondNumber === 0 && sirdNumber === 0) {
        return (`${units[firstNumber]} hundred`)
      };
       if (secondNumber === 0) {
         return (`${units[firstNumber]} hundred ${units[sirdNumber]}`)
       };
      if (secondNumber === 1) {
        return (`${units[firstNumber]} hundred ${dozenOne[doublNumber]}`)
      };
      if (doublNumber >= 20 && doublNumber % 10 === 0) {
        return (`${units[firstNumber]} hundred ${dozenTwo[secondNumber]}`)
      } else {
        return (`${units[firstNumber]} hundred ${dozenTwo[secondNumber]} ${units[sirdNumber]}`)
      };
    };
  };