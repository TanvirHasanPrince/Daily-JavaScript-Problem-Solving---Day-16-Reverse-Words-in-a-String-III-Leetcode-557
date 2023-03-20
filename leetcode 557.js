/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.

*/

function reverseWords(s) {
  let reversedSentence = "";
  let word = "";
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // Found a space, reverse the current word and add to reversed sentence
      reversedSentence += reverseWord(word) + " ";
      console.log(word);
      word = "";
      console.log(reversedSentence);
      console.log(word);
    } else {
      // Add character to current word
      word += s[i];
      console.log(word);
    }
  }
  
  // Reverse the last word and add to reversed sentence
  reversedSentence += reverseWord(word);
  console.log(reversedSentence);
  
  return reversedSentence;
}

function reverseWord(word) {
  let reversed = "";
  
  for (let i = word.length - 1; i >= 0; i--) {
   console.log(i)
    reversed += word[i];
  }

  console.log (reversed);
  
  return reversed;
}

// Example usage
const sentence = "Hello World";
console.log(sentence.length);
const reversed = reverseWords(sentence);
console.log(reversed); // "olleH dlrow"


/*
why this? // Reverse the last word and add to reversed sentence

In the alternative implementation without using s.split, the reverseWords function builds up each word character by character until it encounters a space character. When a space is encountered, it means that the current word has ended and needs to be reversed and added to the reversedSentence variable with a space delimiter.

However, the last word in the input string may not be followed by a space character. In this case, the for loop in reverseWords will finish iterating over s before the last word has been added to the reversedSentence variable. To handle this case, we need to reverse the last word separately after the loop has finished and add it to reversedSentence.

This is why the comment says "Reverse the last word and add to reversed sentence". We need to handle the case where the last word in the input string is not followed by a space character and make sure that it is reversed and added to the reversedSentence variable before returning it.


*/
