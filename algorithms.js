// Basic Algorithms

/*
    1.) Convert Celsius to Fahrenheit

    The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
    You are given a variable celsius representing a temperature in Celsius.
    Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
    Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
    Don't worry too much about the function and return statements as they will be covered in future challenges.
    For now, only use operators that you have already learned.
*/

    /* Solution: */
    function convertToF(celsius) {
        let fahrenheit = celsius * 9/5 + 32;
        return fahrenheit;
    }
      
    convertToF(30);

/*
    2.) Reverse a String

    Reverse the provided string.
    You may need to turn the string into an array before you can reverse it.
    Your result must be a string.
*/

    /* Solution: */

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
      
    reverseString("hello");

/*
    3.) Factorialize a Number

    Return the factorial of the provided integer.
    If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
    Factorials are often represented with the shorthand notation n!

    For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

    Only integers greater than or equal to zero will be supplied to the function.
*/

    /* Solution */

    function factorialize(num) {
        if(num === 0) {
          return 1;
        } 
        return num * factorialize(num - 1);
      }
      
      factorialize(5);

/*
    4.) Find the Longest Word in a String

    Return the length of the longest word in the provided sentence.
    Your response should be a number.
*/

      /* Solution */

    function findLongestWordLength(str) { 
        var str_array = str.split(' ').map(word => word.length);
        return Math.max(...str_array);
    }
    
    findLongestWordLength("The quick brown fox jumped over the lazy dog");

/*
    5.) Return Largest Numbers in Arrays

    Return an array consisting of the largest number from each provided sub-array.
    For simplicity, the provided array will contain exactly 4 sub-arrays.
    Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

    /* Solution */

    const largestOfFour = (arr) => arr.map(sub_arr => Math.max(...sub_arr));

    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
    6.) Confirm the Ending

    Check if a string (first argument, str) ends with the given target string (second argument, target).
    This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
    But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

    /* Solution */

    const confirmEnding = (str, target) => {
        let substring = str.substring(str.length - target.length);
        return ((target === substring) ? true : false); 
    }
      
    confirmEnding("Bastian", "n");

/*
    7.) Repeat a String Repeat a String

    Repeat a given string str (first argument) for num times (second argument).
    Return an empty string if num is not a positive number. Do not use repeat() method.
*/

    /* Solution */

    const repeatStringNumTimes = (str, num) => {
        if(num < 0) { return '' }
      
        let str_array = [];
        
        for(let i = 0; i < num; i++){
          str_array.push(str);
        }
      
        return str_array.join('');
      }
      
      repeatStringNumTimes("abc", 3);

/*
      8.) Truncate a String

      Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
      Return the truncated string with a ... ending.
*/

      /* Solution */

      const truncateString = (str, num) => {
        let str_array = str.split('');
      
        if(str_array.length > num) {
          let new_str = str_array.splice(0, num).join('').concat('...');
          console.log(new_str);
          return new_str;
        } else {
          return str;
        }
      
      
      }
      
      truncateString("A-tisket a-tasket A green and yellow basket", 8);

/*
      9.) Finders Keepers

      Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
      If no element passes the test, return undefined.
*/

      /* Solution */

      const findElement = (arr, func) => {
        let num = 0;
        let filtered = arr.filter(func);
      
        return filtered[0];
      }
      
      findElement([1, 2, 3, 4], num => num % 2 === 0);

/*
      10.) Boo who

      Check if a value is classified as a boolean primitive. Return true or false.
*/

      /* Solution */

      const booWho = (bool) => (typeof bool === 'boolean') ? true : false;

      booWho(null);

/*
      11.) Title Case a Sentence

      Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
      For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

      /* Solution */

      const titleCase = (str) => {
        let str_array = str.split(' ');
      
        let modified_array = str_array.map(word => word.slice(0,1).toUpperCase().concat(word.slice(1, word.length).toLowerCase()));
      
        return modified_array.join(' ');
      }
      
      titleCase("I'm a little tea pot");

/*
      12.) Slice and Splice

      You are given two arrays and an index.
      Use the array methods slice and splice to copy each element of the first array into the second array, in order.
      Begin inserting elements at index n of the second array.
      Return the resulting array. The input arrays should remain the same after the function runs.
*/

      /* Solution */
      const frankenSplice = (arr1, arr2, n) => {
        let arr2_copy = arr2.slice(0);
      
        arr2_copy.splice(n, 0, ...arr1.slice(0));
      
        return arr2_copy;
      }
      
      frankenSplice([1, 2, 3], [4, 5], 1);

/*
      13.) Falsy Bouncer

      Remove all falsy values from an array.
      Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
      Hint: Try converting each value to a Boolean.
*/

      /* Solution */

      const bouncer = (arr) => {
        return arr.filter(Boolean);
      }
      
      bouncer([7, "ate", "", false, 9]);

/*
      14.) Where Do I Belong

      Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
      For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
      Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

      /* Solution */

      const getIndexToIns = (arr, num) => {
        // Find my place in this sorted array.
        arr = arr.sort((a,b) => {
          return a - b;
        });
      
        let arr_index;
      
        if(arr.length === 0){
          arr_index = 0;
        }
      
        for(let i = 0; i < arr.length; i++){
          if(arr[i] < num && arr[i+1] > num){
            arr_index = arr.indexOf(arr[i+1]);
          } else if(arr[i] === num && num < arr[i+1]){
            arr_index = arr.indexOf(arr[i]);
          } else if(arr[i] > num && arr[i+1] < num){
            arr_index = arr.indexOf(arr[arr.length - 1]);
          } else if(num > arr[arr.length - 1]){
            arr_index = arr.indexOf(arr[arr.length - 1]) + 1;
          }
        }
      
        return arr_index;
      }
      
      getIndexToIns([40, 60], 50);

/*
      15.) Mutations

      Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
      For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
      The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
      Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

      /* Solution */

      const mutation = (arr) => {
        // turn both strings in arr to lowercase
        arr[0] = arr[0].toLowerCase();
        arr[1] = arr[1].toLowerCase();
      
        // turn each string into it's own array
        // split each string into letters
        // sort each string of letters alphabetically
        let arr1 = arr[0].split('').sort();
        let arr2 = arr[1].split('').sort();
      
        let result = [];
      
        // check if arr1 includes all of arr2
        for(let i = 0; i < arr2.length; i++){
          if(arr1.includes(arr2[i])){
            result.push(true);
          } else {
            result.push(false);
          }
        }
      
        // check for false values in result array
        if(result.includes(false)){
          return false;
        } else {
          return true;
        }
      }
      
      mutation(["hello", "hey"]);

/*
      16.) Chunky Monkey

      Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

      /* Solution */

      const chunkArrayInGroups = (arr, size) => {
        let new_arr = [];
      
        for(let i = 0; i < arr.length; size){
          new_arr.push(arr.splice(i, size));
        }
      
        return new_arr;
      }
      
      chunkArrayInGroups(["a", "b", "c", "d"], 2);