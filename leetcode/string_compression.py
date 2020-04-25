chars = ["a", "a", "b", "b"]
# def compress(self, chars: List[str]) -> int:
curr_char = chars[0]
count = 0
i = 0

while i <= len(chars) - 1:
    count += 1
    if chars[i] == curr_char and count != 1:
        if i == len(chars) - 1 and chars[i] == curr_char:
            chars[i] = count
        elif chars[i + 1] == curr_char:
            chars.pop(i)
            continue
        else:
            chars[i] = str(count)
            count = 0
            curr_char = chars[i + 1]
    i += 1
# return chars
print(chars)

# a a b b c c c
