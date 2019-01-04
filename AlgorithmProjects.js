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

/*
  4.) Telephone Number Validator

  Return true if the passed string looks like a valid US phone number.
  The user may fill out the form field any way they choose as long as it has the format of a valid US number.
  The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

  For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
  Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
  The area code is required. If the country code is provided, you must confirm that the country code is 1. 
  Return true if the string is a valid US phone number; otherwise return false.
*/

/* Solution */
const telephoneCheck = (str) => {
  let matched = str.match(/^[1]?[-. ]?(\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/gm);
  if (matched === null) {
    return false;
  }
  if (str === matched[0]) {
    return true;
  }
    return false;
}
  
telephoneCheck("555-555-5555");

/*
  5.) Cash Register

  Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
  cid is a 2D array listing available currency.
  The checkCashRegister() function should always return an object with a status key and a change key.
  Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
  Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
  Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

/* Solution */
checkCashRegister = (price, cash, cid) => {
  const cashAvailable = 0;
  const changeOwed = cash - price;
  const change = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01
  };

  let yourChange = {
    status: "OPEN"
  };

  let yourChange = {
    status: "OPEN",
    change: []
  };

  let noFunds = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  };

  let closed = {
    status: "CLOSED",
    change: cid
  };

  let flatt = cid.reduce((acc, curr) => {
    return acc.concat(curr);
  });

  for (let i = 0; i < flatt.length; i++) {
    if (typeof flatt[i] === "number") {
      cashAvailable += flatt[i];
    }
  }
  cashAvailable = Math.round(100 * cashAvailable) / 100;

  if (cashAvailable < changeOwed) {
    return noFunds;
  } else if (cashAvailable === changeOwed) {
    return closed;
  }
  //the below code is for coins only and changeOwed is less than one dollar.
  let coins = 0;
  for (let i = 3; i >= 0; i--) {
    if (cid[i][1] > 0.0) {
      coins += cid[i][1];
    }
  }
  if (changeOwed > coins && changeOwed < 1.0) {
    return noFunds;
  }
  //the below code if fo the actual change returned

  let ans = [];
  let compiler = 0;
  for (let prop in change) {
    let check = changeOwed - change[prop];
    if (check < changeOwed && check > 0) {
      for (let i = cid.length - 1; i > -1; i--) {
        if (cid[i][0] === prop) {
          let changeAvailable = cid[i][1];
          console.log(changeAvailable);
          while (
            changeAvailable > 0 &&
            changeOwed > 0 &&
            changeOwed >= change[prop]
          ) {
            changeAvailable = changeAvailable - change[prop];
            changeOwed = changeOwed - change[prop];
            compiler += change[prop];
            changeOwed = Math.round(100 * changeOwed) / 100;
          }
          ans.push([prop, compiler]);
          compiler = 0;
        }
      }
    }
  }
  yourChange.change = ans;

  return yourChange;
}
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);