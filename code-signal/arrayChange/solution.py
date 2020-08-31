def arrayChange(inputArray):
    moves = 0
    for i in range(0, len(inputArray)-1):
        if inputArray[i] >= inputArray[i+1]:
            increase = inputArray[i] - inputArray[i+1] + 1
            inputArray[i+1] = increase + inputArray[i+1]
            moves = moves + increase
