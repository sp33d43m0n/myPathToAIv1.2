print("""vamos a jugar escoge
-piedra
-papel
-tijera""")
elegir1=input("Selecciona un objeto:  ").lower()
elegir2=input("Selecciona un objeto:  ").lower()

opciones_validas = ["piedra", "papel", "tijera"]

if elegir1 not in opciones_validas or elegir2 not in opciones_validas:
    print("Eleccion no valida. Ambos jugadores deben escoger entre 'piedra', 'papel', 'tijera'.")
else:
    if (elegir1=="piedra" and elegir2=="tijera") or (elegir1=="papel" and elegir2=="piedra") or (elegir1=="tijera" and elegir2=="papel"):
        ganador = "jugador 1"
    
    elif (elegir1=="tijera" and elegir2=="piedra") or (elegir1=="piedra" and elegir2=="papel") or (elegir1=="papel" and elegir2=="tijera"):
        ganador = "jugador 2"    

    else:
        ganador = "Empate"
    
    print(f"jugador 1: {elegir1} Vs jugador2: {elegir2} - Resultado ganador: {ganador}")
