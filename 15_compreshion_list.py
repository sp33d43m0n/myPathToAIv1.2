#matrix = [[1,2,3],[4,5,6],[7,8,9]]

#forma larga de realizar una matriz transpuesta
#transposed = []
#for i in range(len(matrix[0])): 
    #transposed_row = []
    #for row in matrix:
        #transposed_row.append(row[i])
    #transposed.append(transposed_row)    

#print(transposed)

#short way to do transpose matrix
matrix2 = [[6,5,4], [3,2,1]]
transposedshort = [[row[x] for row in matrix2] for x in  range(len(matrix2[0]))]

print(transposedshort)


#F=(9/5*C)+32