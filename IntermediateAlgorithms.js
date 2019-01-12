/* 
  1.) Sum all Numbers

  We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
  The lowest number will not always come first.

 */

/* Solution */
const sumAll = (arr) => {
  // sort arr so lowest number comes first
  arr = arr.sort((a,b) => a - b);

  // loop through arr and fill in the missing numbers
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < arr[arr.length - 1]){
      arr.splice(i+1, 0, arr[i]+1);
    }
  }
  
  // remove last element from modified arr
  arr.pop();

  // check to see if modified arr contains all missing values
  // console.log(arr);

  // Use reduce method to sum all numbers in modified arr. Store in new variable 'sum'
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

  // check to see if sum variable contains actual sum of arr
  console.log(sum);

  return sum;

}

sumAll([1, 4]);

/*
  2.) Diff Two Arrays

  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
  In other words, return the symmetric difference of the two arrays.

  Note: 
  You can return the array with its elements in any order.
*/

/* Solution */
const diffArray = (arr1, arr2) => {
  let newArr = [];

  // loop through arr1 and check to see if arr1 element is present in arr2
  for(let i = 0; i < arr1.length; i++){
    if(arr2.includes(arr1[i]) === false){
      newArr.push(arr1[i]);
    }
  }

  // loop through arr2 and check to see if arr2 element is present in arr1
  for(let i = 0; i < arr2.length; i++){
    if(arr1.includes(arr2[i]) === false){
      newArr.push(arr2[i]);
    }
  }

  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
  3.) Seek and Destroy

  You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
  Remove all elements from the initial array that are of the same value as these arguments.

  Note:
  You have to use the arguments object.

*/

/* Solution */
function destroyer(arr) {
  // filter through the initial array (arguments[0])
  let filtered_arr = arguments[0].filter(item => {
    // create a new variable and use it to track if there is a match between item and argument. Set inital value to false
    let match = false;
    // loop through all the arguments and compare each argument to each item.
    for(let i = 1; i < arguments.length; i++){
      //  If there is a match, set match variable to true.
      if(item === arguments[i]){
        match = true;
      }
    }

    // if there is no match, item gets included in the new array
    if(match === false){
      return item;
    }
  });

  return filtered_arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

















/*
  7.) Search and Replace

  Perform a search and replace on the sentence using the arguments provided and return the new sentence.
  First argument is the sentence to perform the search and replace on.
  Second argument is the word that you will be replacing (before).
  Third argument is what you will be replacing the second argument with (after).

  Note:
  Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

/* Solution */
const myReplace = (str, before, after) => {
  // split the str into an array of strings
  str = str.split(' ');

  // loop over str array
  for(let i = 0; i < str.length; i++){
    /* check if str[i] is equal to before argument && if first character of before argument is 
    uppercase */
    if((str[i] === before) && (before === before.charAt(0).toUpperCase() + before.slice(1))){
      // change first character of after argument to uppercase
      after = after.charAt(0).toUpperCase() + after.slice(1);
      
      // replace str[i] with new after argument
      str[i] = after;
     
      // check str[i]
      console.log(str[i]);
    } else
    /* check if str[i] is equal to before argument && if first character of before argument is          
    lowercase */
     if((str[i] === before) && (before === before.charAt(0).toLowerCase() + before.slice(1))){
      // change first character of after argument to lowercase
      after = after.charAt(0).toLowerCase() + after.slice(1);

      // replace str[i] with new after argument
      str[i] = after;
      
      // check str[i]
      console.log(str[i]);
    }
  }

  // check str to see if changes are applied
  console.log(str);

  // join the modified str and return it
  str = str.join(' ');
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/*
  8.) DNA Pairing

  The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
  Base pairs are a pair of AT and CG. Match the missing element to the provided character.
  Return the provided character as the first element in each array.
  For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
  The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/

/* Solution */
const pairElement = (str) => {
  /* In DNA pairing, the pairs are as follows:
      A <-> T
      C <-> G
   */

  // 1.) Split str into an array of strings.
  let str_arr = str.split('');
  console.log(str_arr);

  // 2.) Create new empty array to store the smaller arrays
  let pairs_arr = [];

  // 3.) Iterate through str_arr
  for(let i = 0; i < str_arr.length; i++){
    // 4.) Perform an action based on value of str_arr[i]
    switch(str_arr[i]){
        /* 5.) In each case, pair up both str_arr[i] and it's match in an array, 
               then push the new array into pairs_arr
        */      
      case 'A':
        pairs_arr.push([str_arr[i], 'T']);
        break;
      case 'T':
        pairs_arr.push([str_arr[i], 'A']);
        break;
      case 'C':
        pairs_arr.push([str_arr[i], 'G']);
        break;
      case 'G':
        pairs_arr.push([str_arr[i], 'C']);
        break;
      default:
        return null;
    }
  } 

  // 6.) Check to see if pairs_arr has correct DNA pairs
  console.log(pairs_arr);

  // 7.) Return pairs_arr
  return pairs_arr;

}

pairElement("GCG");