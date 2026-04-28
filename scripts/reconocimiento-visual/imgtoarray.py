import tkinter as tk
from tkinter import filedialog
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt

def importar_y_convertir_imagen():
    # 1. Configurar la ventana de selección de archivos
    root = tk.Tk()
    root.withdraw() # Oculta la ventana principal de tkinter
    root.attributes("-topmost", True) # Trae el cuadro de diálogo al frente

    # 2. Abrir el seleccionador de archivos (filtrando solo JPG)
    ruta_archivo = filedialog.askopenfilename(
        title="Selecciona una imagen JPG",
        filetypes=[("Archivos JPG", "*.jpg *.jpeg")]
    )

    if ruta_archivo:
        # 3. Cargar la imagen y convertirla en array
        img = Image.open(ruta_archivo)
        array_imagen = np.array(img)

        # 4. Renderizar el array obtenido
        print(f"Imagen convertida exitosamente.")
        print(f"Dimensiones del array (Alto, Ancho, Canales): {array_imagen.shape}")
        
        plt.imshow(array_imagen)
        plt.title("Visualización del Array de Imagen")
        plt.axis('off') # Ocultar ejes
        plt.show()
        
        return array_imagen
    else:
        print("No se seleccionó ningún archivo.")
        return None

# Ejecutar el método
if __name__ == "__main__":
    matriz_imagen = importar_y_convertir_imagen()