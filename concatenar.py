nombre = "javier"
print("mi nombre es", nombre)

nombre2 = "alejandro"
print("mi segundo nombre es" + nombre2)

name1 = "johana"
lastname= "tsao"
edad=33

print(f"mi nombre es {name1} {lastname} y tengo {edad}")

dog = ('javier','Melendez',43,False)
print(dog[2])

name3 = 'JAVIER melendez'
print(name3[-1])
print(len(name3))
print(name3.lower())

#operadores numericos
a = 10
b = 30
print("suma", a+b)
print("resta", a-b)
print("div", a/b)
print("multiplicacion", a*b)
print("mod", a%b)
print("parte entera", a//b)
print("potencia", a**b)
b +=2
print(b)

primernombre = input("dame tu primer nombre:")
Edad = int(input("cuantos años tienes"))
print(primernombre, type(primernombre), Edad, type(Edad))

#Clase SLICE --> Evitar que las variables compartan la misma posicion de memoria y los datos

a = [4,2,1,4,2,1]
b = a
print(id(a))
print(id(b))
a.append(6)
print(a,b)
c = a[:]
print(id(c))

# Tuplass y matrices
matriz = [[1,2,3],[4,5,6],[7,8,9]]
print(matriz[1])
print(matriz[1][1])
matriz2 = [[[1,2],[3,4]],[[5,6],[7,8]]]
print(matriz2)
print(matriz2[1][0][0])   #matriz en 2d


