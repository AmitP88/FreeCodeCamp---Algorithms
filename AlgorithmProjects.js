/*
  1.) Palindrome Checker

  Return true if the given string is a palindrome. Otherwise, return false.
  A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

  Note:
  You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
  We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
  We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

/* Solution */
const palindrome = (str) => {
  let modded_str = str.replace(/[^A-Za-z0-9]/gi,"").toLowerCase();
  let reversed_modded_str = modded_str.split('').reverse().join('');

  if(modded_str === reversed_modded_str){
    return true;
  } else {
    return false;
  }
}

palindrome("eye");

/*
  2.) Roman Numeral Converter

  Convert the given number into a roman numeral.
  All roman numerals answers should be provided in upper-case.
*/

/* Solution */
const convertToRoman = (num) => {

  const decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  const romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  let romanized = '';

  for (let index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

convertToRoman(36);

/*
  3.) Caesars Cipher

  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
  In a shift cipher the meanings of the letters are shifted by some set amount.
  A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
  Write a function which takes a ROT13 encoded string as input and returns a decoded string.
  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

/* Solution */
const rot13 = (str) => { // LBH QVQ VG!

  let str_arr = str.split('');
  console.log(str_arr);

  for(let i=0; i < str_arr.length; i++){
    switch(str_arr[i]){
      case "A":
        str_arr[i] = "N";
        break;
      case "B":
        str_arr[i] = "O";
        break;
      case "C":
        str_arr[i] = "P";
        break;
      case "D":
        str_arr[i] = "Q";
        break;
      case "E":
        str_arr[i] = "R";
        break;
      case "F":
        str_arr[i] = "S";
        break;
      case "G":
        str_arr[i] = "T";
        break;
      case "H":
        str_arr[i] = "U";
        break;
      case "I":
        str_arr[i] = "V";
        break;
      case "J":
        str_arr[i] = "W";
        break;
      case "K":
        str_arr[i] = "X";
        break;
      case "L":
        str_arr[i] = "Y";
        break;
      case "M":
        str_arr[i] = "Z";
        break;
      case "N":
        str_arr[i] = "A";
        break;
      case "O":
        str_arr[i] = "B";
        break;
      case "P":
        str_arr[i] = "C";
        break;
      case "Q":
        str_arr[i] = "D";
        break;
      case "R":
        str_arr[i] = "E";
        break;
      case "S":
        str_arr[i] = "F";
        break;
      case "T":
        str_arr[i] = "G";
        break;
      case "U":
        str_arr[i] = "H";
        break;
      case "V":
        str_arr[i] = "I";
        break;
      case "W":
        str_arr[i] = "J";
        break;
      case "X":
        str_arr[i] = "K";
        break;
      case "Y":
        str_arr[i] = "L";
        break;
      case "Z":
        str_arr[i] = "M";
        break;
    }
  }

  console.log(str_arr.join(''));
  return str_arr.join('');

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");