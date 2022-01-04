# API John Deere

## Description

Este proyecto esta construido con [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker

Para crear la imagen

```
docker build -t appjohndeere .
```

Para levantar la aplicación (el puerto se puede mapear el que gusten ;) )

```
docker run -d -it -p 8040:8040 appjohndeere 
```

## Funcionamiento

La API está a la escucha en la url HOST:8040/callback de las credenciales necesarias. Estas se guardan en un archivo llamado 'datos.json' en la raiz del proyecto.
Cada request con datos válidos actualiza el contenido del archivo datos.json.