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