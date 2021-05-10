def fearNotLetter(s):
    for i in range(len(s)):
        code = ord(s[i])
        if code != ord(s[0])+i:
            return chr(ord(s[0])+i)


print(fearNotLetter("abce"))
