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