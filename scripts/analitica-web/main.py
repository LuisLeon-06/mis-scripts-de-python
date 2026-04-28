from validators.string_validators import empieza_con_vocal

# Método Principal
def main():
    texto = "Hola Mundo!"
    
    if (empieza_con_vocal(texto)):
        print(f'El string "{texto}" empieza con vocal.')
    else:
        print(f'El string "{texto}" NO empieza con vocal')


# Estándar en Python: 
# - Si este archivo se está ejecutando directamente, corré main()
# - Si este archivo está siendo importado desde otro archivo, no lo ejecutes automáticamente
if __name__ == "__main__":
    main()