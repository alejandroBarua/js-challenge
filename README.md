## Challenge tecnico

### Ejercicio 1 : Espiral

Debemos crear un espiral de NxN, siendo N un número entero mayor igual a 5 que es ingresado
en la función como parámetro de entrada. El espiral no debe tocarse asi mismo y debe recorrerse en sentido horario.

### Ejercicio 2 : Batalla naval

Hay que crear una funcion que valide que un tablero del juego de "batalla naval" esta bien armado.
El tablero debe cumplir las siguientes reglas:

- 1 Acorazado (tamaño de 4 celdas)
- 2 Cruceros (tamaño 3)
- 3 Destructores (tamaño 2)
- 4 submarinos (tamaño 1)
- No se permiten barcos adicionales.
- Cada barco debe ser una línea recta (horizontal o vertical).
- El barco no puede superponerse ni estar en contacto con ningún otro barco, ni por borde ni por esquina.

- Se garantiza que el argumento es una matriz de dos dimensiones de 10x10.
  Los elementos de la matriz son números, “0” si la celda está libre y “1” si está ocupada por un barco (o parte de él).

### Ejercicio 3 : Codificacion y decodificacion

Buscamos crear dos funciones, una para codificar y luego otra para decodificar una cadena.
Este cifrado se utiliza para codificar una cadena colocando cada carácter sucesivamente en una
diagonal a lo largo de un conjunto de rieles o carriles.

Primero comienza moviéndote en diagonal hacia abajo. Cuando llegue a la parte inferior, invierta
la dirección y muévase en diagonal hacia arriba hasta llegar al riel o carril superior. Continúe
hasta llegar al final de la cuerda. Cada carril o riel se lee de izquierda a derecha para lograr la
cadena codificada.

- Tanto para la codificación como para la decodificación, suponga que el número de rieles
  es mayor o igual a dos y que pasar una cadena vacía devolverá una cadena vacía.

- No filtres la puntuación, ya que son parte de la cadena.
