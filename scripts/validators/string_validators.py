def empieza_con_vocal(texto):
    """
    Devuelve True si el texto empieza con una vocal.
    Devuelve False si no es un string o si está vacío.

    Parámetros:
        texto (str): texto a evaluar

    Retorna:
        bool: True si empieza con vocal, False en caso contrario
    """
    if not isinstance(texto, str):
        return False

    texto = texto.strip()

    if texto == "":
        return False

    primera_letra = texto[0]
    return primera_letra in "aeiouAEIOU"