def palindrome(word):
    newWord = ''

    newWord+= word[::-1]

    if newWord.lower() == word.lower():
         print(f"The word {word} is a palindrome.")
    else:
         print(f"The word {word} is not a palindrome.")

   

palindrome("Malayalam")