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
    Cada conjunto de tres caracteres representa los permisos de lectura ®, escritura (w) y ejecución (x), respectivamente. Si un permiso está presente, se muestra el carácter correspondiente; si no, se muestra un guion (-). Por ejemplo:
    - -rw-r--r-- significa que el propietario tiene permisos de lectura y escritura, mientras que otros solo tienen permiso de lectura.
3. El número antes del nombre del propietario es el número de enlaces al archivo o directorio.
    - Luego vienen el nombre del propietario y el nombre del grupo.
    - El número después del nombre del grupo es el tamaño del archivo en bytes.
    - Finalmente, se muestra la fecha y hora de la última modificación.
4. Esquema (Salida comando ls):

    ![Esquema](/astroblog/Esquema/ls.svg)
