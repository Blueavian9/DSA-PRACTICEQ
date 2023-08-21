// Description
// Count the number of occurrences of a letter in a string.

// Example

// Input:
// s == "bacab"
// letter = "b"

// Output:
// 2

// Input:
// s == "abbb"
// letter == "a"

// Output:
// 1

// function solution(nominator, denominator) {
//   let count = 0;
//   for (let i = 0; i <= s.length; i++) {
//     if (denominator == s[i]) {
//       count++;
//     }
//   }
//   return nominator / denominator == 2;
// }

function solution(s, letter) {
  let count = 0;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === letter) {
      count++;
    }
  }

  return count;
}

/*
Plan: 

1. Initialization: Start by setting a count variable to 0.
This count will keep track of the how many times the desired letter appears in the given string.

2. Loop Through the String: Use a loop to go through each character of the string.

3. Check Each Character: For each character in the string, compare it with the letter you're looking for. 

4. Count Increment: If the current character matches the desired letter, increase the count by 1.

5. Finish Looping: Continue this process for every character in the string. 

6. Return the Count: Once the loop finishes, return the final count of how many times the desired letter appeared in the string.

To summarize, this code helps you count how many times a specific letter appears in a given string.
It's like tallying how many instances of the letter you find as you go through the string.
*/
