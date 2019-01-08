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