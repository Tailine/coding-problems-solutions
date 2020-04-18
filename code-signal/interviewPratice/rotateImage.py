from copy import deepcopy

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# print(len(a[0]))

current_column = len(matrix[0]) - 1  # last column index
matrix_copy = deepcopy(matrix)  # matrix copy

for elem in matrix:
    for (j, e) in enumerate(elem):
        matrix_copy[j][current_column] = e
    current_column -= 1

print(matrix_copy)
