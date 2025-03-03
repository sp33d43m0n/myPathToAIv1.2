# suma enteros impares de 0 a 500,000 e imprime la suma final.
suma = 0
for x in range(1,11,2):
    suma = suma + x
print(suma)
print(type(suma))

suma2 = sum(range(1,11,2))
print(suma2)
    
