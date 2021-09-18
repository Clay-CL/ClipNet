# ClipNet
<img src="https://img.shields.io/badge/Typescript-2F74C0?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"> <img src="https://img.shields.io/badge/socket.io-v4.2.0-green?style=for-the-badge&logo=socket.io">
<br>
Program to share clipboard data between computers connected over the same network. 

### This project makes use of open source libraries:

1. [Clipboard-Listener](https://www.npmjs.com/package/clipboard-listener) to listen to changes in the clipboard and with the updated clipboard data.
2. [clipboardy](https://github.com/sindresorhus/clipboardy) to make changes to the clipboard of the computer receiving the updated clipboard data.

This project consists of Server and Client programs connected over a socket connection.

### Note:
create a **`.env`** file in the root directory with the following:
```shell
SERVER_PORT=<port you wish to run your server on>
CLIENT_PORT=<port you wish to run the client script>

# base url in the format of http://<ip-address>:<server-port>
SERVER_BASE_URL=<base url> 
```

## Setup
### Installation
```shell
npm install
```
### Run Server
```shell
npm start
```
### Client
```shell
npm run start-client
```

