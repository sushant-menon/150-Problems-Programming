def vowelsAndConstant(word):
    vowels = ["a", "e", "i", "o", "u"]
    vowelCount = 0
    constantCount = 0

    for i in range(len(word)):
        if word[i] in vowels:
            vowelCount += 1
        else:
            constantCount += 1

    print(vowelCount)
    print(constantCount)


vowelsAndConstant("sequoia")
