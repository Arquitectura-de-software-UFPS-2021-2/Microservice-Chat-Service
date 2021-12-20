# Microservice chat

_API REST Microservice chat_
## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._
```
git clone https://github.com/Arquitectura-de-software-UFPS-2021-2/Microservice-Chat-Service.git
```
### Pre-requisitos 📋

```
Nodejs version > 14
```

### HOST
```
34.202.12.23:8800
```

### Endpoints
```
/api/auth/register/ POST
/api/conversations/ POST
/api/conversations/:userId GET
/api/conversations/find/:firstUserId/:secondUserId GET
/api/messages/ POST
/api/messages/:conversationId GET
/api/users GET
```
### Instalación 🔧

_Instalamos las dependencias del proyecto_
```
npm i
```
_Iniciamos el servidor_
```
npm start
```
## Construido con 🛠️

* [Nodejs](https://nodejs.org/es/docs/) - Entorno de ejecución para JavaScript.
* [Express](https://expressjs.com/es/starter/installing.html) - Infraestructura de aplicaciones web Node.js.
* [JWT](https://jwt.io/introduction) - Estándar abierto ( RFC 7519 ) que define una forma compacta y autónoma de transmitir información de forma segura entre las partes como un objeto JSON.

## Autores ✒️

* **Frank Jean Pierre Gomez** - *Trabajo Inicial* - [jeanpierregomez](https://github.com/jeanpierregomez)
* **Yilber Esau Patiño Mendoza** - *Documentación* - [yilberp](https://github.com/Yilberp)
