---
title: 'Comando find'
description: 'Kali Linux'
pubDate: '6 9 2024'
heroImage: '/svg/kali_linux.svg'
category: 'Consola Linux'

---

#### <cite>[^1]. Buscar archivos y directorios:</cite>

> El comando find es uno de los más potentes y versátiles en Linux, ya que permite buscar y manipular archivos y directorios de forma flexible y personalizable. A continuación, te presento una lista detallada de los diferentes opciones y operadores que sepueden utilizar con el comando find:

#### <cite>[^2]. Opciones de búsqueda:</cite>

>- **-name:** Busca por el nombre exacto del archivo o directorio.
>- **-iname:** Busca por el nombre exacto del archivo o directorio, ignorando mayúsculas y minúsculas.
>- **-path:** Busca por el path absoluto o relativo del archivo o directorio.
>- **-ipath:** Busca por el path absoluto o relativo del archivo o directorio, ignorando mayúsculas y minúsculas.
>- **-type:** Busca por el tipo de archivo (carpeta, archivo, enlace, etc.).
>- **-size:** Busca por el tamaño del archivo en bytes.
>- **-mmin:** Busca por el tiempo de modificación del archivo en minutos.
>- **-mtime:** Busca por el tiempo de modificación del archivo en días.
>- **-cmin:** Busca por el tiempo de creación del archivo en minutos.
>- **-ctime:** Busca por el tiempo de creación del archivo en días.
>- **-user:** Busca por el propietario del archivo o directorio.
>- **-group:** Busca por el grupo del archivo o directorio.
>- **-perm:** Busca por los permisos de acceso del archivo o directorio.

#### <cite>[^3]. Opciones de acción:</cite>

>- **-print:** Muestra la ruta del archivo o directorio encontrado.
>- **-ls:** Muestra la lista de archivos y directorios encontrados en un formato similar a ls -l.
>- **-exec:** Ejecuta un comando cuando se encuentra un archivo o directorio que coincide con los criterios de búsqueda.
>- **-ok:** Similar a -exec, pero solicita confirmación antes de ejecutar el comando.
>- **-delete:** Borra los archivos o directorios encontrados que coinciden con los criterios de búsqueda.
>- **-mkdir:** Crea un directorio cuando se encuentra un archivo o directorio que coincide con los criterios de búsqueda.
>- **-execdir:** Ejecuta un comando en el directorio padre cuando se encuentra un archivo o directorio que coincide con los criterios de búsqueda.

#### <cite>[^4]. Operadores:</cite>

>- **! (not):** Negación, excluye los archivos y directorios que coinciden con los criterios de búsqueda.
>- **() (groups):** Agrupa condiciones para ser evaluadas como una sola unidad.
>- **&& (and):** Combinación lógica AND, ambos operandos deben ser verdaderos para que la condición sea verdadera.
>- **|| (or):** Combinación lógica OR, al menos uno de los operandos debe ser verdadero para que la condición sea verdadera.

#### <cite>[^5]. Ejemplos:</cite>

> Encontrar todos los archivos con extensión .txt en la carpeta actual:

```bash
find . -name "*.txt"
```
> Encontrar todos los archivos modificados en los últimos 3 días:

```bash
find . -mtime 3
```
> Encontrar todos los archivos propietario del usuario john:

```bash
find . -user john
```
> Encontrar todos los archivos con permisos rwx y tamaño mayor a 1MB:

```bash
find . -perm 755 -size +1M
```
> Encontrar todos los archivos en la carpeta /home/user y ejecutar un comando echo "Archivo encontrado" cuando se encuentre uno:

```bash
find ~ -exec echo "Archivo encontrado" {} \;
```
> Encontrar todos los archivos vacíos en la carpeta /tmp y borrarlos:

```bash
find /tmp -empty -delete
```
> Encontrar todos los archivos con nombre que contiene la palabra "example" y crear un directorio llamado "example" cuando se encuentre uno:

```bash
find . -name "*example*" -exec mkdir example \;
```
[^1]: Buscar.
[^2]: Opciones de búsqueda. 
[^3]: Opciones de acción.
[^4]: Operadores.
[^5]: Ejemplos.