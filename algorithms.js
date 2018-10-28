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