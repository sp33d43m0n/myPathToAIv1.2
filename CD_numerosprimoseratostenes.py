#Forma inicial
# vectorrow = []
# arrayrow = []
# i=0
# j=0

# for x in range(1,101,1):
#     if x % 10 != 0: 
#         vectorrow.append(x)
#     else:
#         vectorrow.append(x)
#         arrayrow.insert(j, vectorrow)
#         j = j+1
#         vectorrow = []
# print (arrayrow)
    
#mejorando la forma a una forma mas compacta   

# Crear una matriz de 10x10 con números del 1 al 100
matriz = []

# Usamos un bucle para crear filas
for i in range(10):
    fila = [j for j in range(i * 10 + 1, i * 10 + 11)]
    matriz.append(fila)

for fil in range(10):
    for col in range (10):
        index = (matriz [fil] [col])
        if (matriz [fil] [col]) == 0 or (matriz [fil] [col]) == 1:
            matriz [fil] [col] = 0                    
        elif (matriz [fil] [col] % index == 0):
            for x in range(len(matriz)):
                for y in range(len(matriz[0])):
                    if (matriz [x] [y] == index):
                        matriz [x] [y] = index
                    elif (matriz [x] [y] % index == 0):
                        matriz [x] [y] = 0
                        

print(matriz)

