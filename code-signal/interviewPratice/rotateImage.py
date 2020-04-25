from copy import deepcopy

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# print(len(a[0]))

column = len(matrix[0]) - 1  # last column index
matrix_copy = deepcopy(matrix)  # matrix copy

for elem in matrix:
    for (j, e) in enumerate(elem):
        matrix_copy[j][column] = e
    column -= 1

print(matrix_copy)

start = {
    'i': 0,
    'j': 0
}

i = start['i']
j = start['j']
current_column = len(matrix[0]) - 1  # last column index

k = 0
matrix_len = len(matrix) * len(matrix)

while k < (matrix_len // 2):
    j = k + 1
    current_elem = matrix[i][j]
    for iteration in range(4):
        if iteration == 0:
            replaced_elem = matrix[i][j + current_column]
            matrix[i][j + current_column] = current_elem
            current_elem = replaced_elem
            j += current_column

        elif iteration == 1:
            replaced_elem = matrix[i + current_column][j]
            matrix[i + current_column][j] = current_elem
            current_elem = replaced_elem
            i += current_column

        elif iteration == 2:
            replaced_elem = matrix[i][current_column - j]
            matrix[i][current_column - j] = current_elem
            current_elem = replaced_elem
            j -= current_column

        elif iteration == 3:
            matrix[current_column - i][j] = current_elem
            i -= current_column

    if j == (current_column - 1):
        current_column -= 1
