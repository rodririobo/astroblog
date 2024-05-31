---
title: 'Comando Linux (ls)'
description: 'Lorem ipsum dolor sit amet'
pubDate: '5 30 2024'
heroImage: '/blog-placeholder-about.jpg'

---

#### Listar archivos y directorios (los permisos)

```bash

    ┌──(user㉿Kali)-[~]
    └─$ ls -lha

    Salida:
    -rw-r--r--  1 user user 3.8K May 29 15:53 .zshrc
    drwxr-xr-x  3 user user 4.0K May 29 15:53 Downloads

```
 1. El primer carácter indica el tipo de archivo:
    - -: Archivo regular.
    - d: Directorio.
    - l: Enlace simbólico (link).
    - c: Dispositivo de caracteres.
    - b: Dispositivo de bloques, como un disco duro.
2. Los siguientes nueve caracteres representan los permisos:
    - Los primeros tres caracteres son para el propietario (usuario).
    - Los siguientes tres caracteres son para el grupo.
    - Los últimos tres caracteres son para otros usuarios.
    Cada conjunto de tres caracteres representa los permisos de lectura ®, escritura (w) y ejecución (x), respectivamente. Si un permiso está presente, se muestra el carácter correspondiente; si no, se muestra un guion (-). 
    
    - Por ejemplo:
        - -rw-r--r-- significa que el propietario tiene permisos de lectura y escritura, mientras que otros solo tienen permiso de lectura.

3. Enlaces duros:
    
    - En Linux, un enlace duro es una referencia adicional a un archivo o directorio existente. 
    
    - A diferencia de los enlaces simbólicos (que son como accesos directos), los enlaces duros apuntan directamente al mismo nodo en el sistema de archivos.

    - Cuando creas un enlace duro a un archivo o directorio, estás creando una nueva entrada en el sistema de archivos que apunta al mismo contenido. Ambos enlaces (el original y el enlace duro) comparten el mismo contenido y ocupan el mismo espacio en disco.

    - Los enlaces duros no tienen un propietario o permisos independientes; heredan los permisos del archivo original.

    Número de enlaces duros:
    
    - El número que ves antes del nombre del propietario en la descripción de permisos es el contador de enlaces duros.
    
    - Indica cuántos enlaces duros están asociados con ese archivo o directorio específico.

    - Si el contador muestra “1”, significa que solo hay un enlace (el original). 

    - Si muestra un número mayor, hay varios enlaces duros apuntando al mismo contenido.

4. Esquema (Mejor comprensión):

    ![Esquema](/astroblog/Esquema/ls.svg)
