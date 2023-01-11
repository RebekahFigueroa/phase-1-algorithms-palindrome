function isPalindrome(word) {
	// Write your algorithm here
	const letterArray = word.split("");
	const letterArrayReverse = letterArray.reverse();
	const reverseWordAsString = letterArrayReverse.join("");
	if (word === reverseWordAsString) {
		return true;
	} else {
		return false;
	}
}

/* 
  Add your pseudocode here
  // create a new string that is the reverse of the original word 
  // (ie flip word and set to new variable)
  // compare original word to new word
  //if true, return true, else return false

  // to create flipped wordL 
  // split() to put orginal word into an array of the letters
  // reverse() to reverse array (last letter becomes first, etc)
  // join() to join this word together 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", isPalindrome("racecar"));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
