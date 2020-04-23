chars = ["a", "a", "b", "b", "c"]
# def compress(self, chars: List[str]) -> int:
curr_char = chars[0]
count = 0
# i = 0

# while i < len(chars):
for i, char in enumerate(chars):
    count += 1
    if char == curr_char and count != 1:
        if chars[i + 1] == curr_char:
            chars.pop(i)
        else:
            chars[i] = count
            count = 0
            curr_char = chars[i + 1]
    # i += 1
# return chars
print(chars)

# a a b b c c c
