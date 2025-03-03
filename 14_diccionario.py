#DICCIONARIOS
numbers = {1:"uno", 2:"dos", 3:"tres"}
print(numbers[2])
information = {"Nombre": "javier",
               "Apellido": "melendez",
               "Altura": 1.80,
               "edad": 43}
del information["edad"]
print(information)
claves = information.keys()
values = information.values()
print(claves, values, type(claves))
#creando tuplas
pairs = information.items()
print(pairs)
#creando una agenda de contactos - diccionario de diccionarios
agenda = {"javier": {"Apellido": "melendez",
                "Altura": 1.80,
                "edad": 43},
        "johana": {"Apellido": "tsao",
                    "Altura": 1.64,
                    "edad": 34}
        }
print(agenda["johana"])

