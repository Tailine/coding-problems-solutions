def amendTheSentence(s):
    sentence = ""
    for char in s:
        if char.isupper():
            sentence += (" " + char.lower())
            continue
        sentence += char
    return sentence.strip()
