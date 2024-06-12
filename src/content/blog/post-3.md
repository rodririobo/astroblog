---
title: 'Copiar un paquete'
description: 'Lorem ipsum dolor sit amet'
pubDate: '6 12 2022'
heroImage: '/svg/kali_linux.svg'
---

### Identificar el paquete

Utiliza el comando dpkg -l para mostrar la lista de paquetes instalados.
Busca el nombre del paquete que deseas copiar.
Si no sabes el nombre del paquete, puedes utilizar el comando apt-cache search <palabra_clave> para buscar paquetes que contengan una palabra clave.

### Obtener la ruta de instalación

Utiliza el comando dpkg -L <package_name> para obtener la ruta de instalación del paquete.

### Crear un paquete

Utiliza el comando dpkg-deb con el parámetro --build para crear un paquete a partir de la ruta de instalación:
CopyReplit
dpkg-deb --build /ruta/de-instalacion/ package.deb
Reemplaza /ruta/de-instalacion/ con la ruta real de instalación del paquete y package.deb con el nombre del archivo de paquete que deseas crear.

### Copiar el paquete

Utiliza el comando scp o rsync para copiar el archivo de paquete a otro sistema:
CopyReplit
scp package.deb usuario@remoto:/ruta/de-instalacion/
Reemplaza usuario@remoto con la cuenta de usuario y la ruta remota donde deseas copiar el archivo de paquete.

### Instalar el paquete en otro sistema

Utiliza el comando dpkg con el parámetro -i para instalar el paquete en otro sistema:
CopyReplit
dpkg -i package.deb
Reemplaza package.deb con el nombre del archivo de paquete que deseas instalar.

### Verificar la instalación

Utiliza el comando dpkg -l para verificar que el paquete se ha instalado correctamente.