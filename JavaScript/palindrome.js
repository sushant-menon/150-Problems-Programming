const palindrome = word => {
  let newWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }

  if (newWord.toLowerCase() === word.toLowerCase()) {
    console.log(`The Given string ${word} is a palindrome.`);
  } else {
    console.log(`The Given string ${word} is not a palindrome.`);
  }
};

palindrome("Malayalam");
