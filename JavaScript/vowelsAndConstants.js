const vowelsAndConstant = word => {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let constantCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelCount += word[i].length;
    } else {
      constantCount += word[i].length;
    }
  }
  console.log(vowelCount);
  console.log(constantCount);
};

vowelsAndConstant("sequoia");
