#3.	Contar, Dojo Way - imprime enteros del 1 al 100. Si es divisible por 5

numeros = []
for i in range(1,101):
    if i % 10 == 0:
        numeros.append("coding")
    elif i % 5 == 0:
        numeros.append("coding_dojo")
    else:
        numeros.append(i)
print(numeros)
        
        