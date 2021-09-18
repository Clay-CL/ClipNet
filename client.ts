import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { io } from "socket.io-client";
import ClipboardData from './models/clipboard.model';
import { uuid } from 'uuidv4';
import clipboardy from 'clipboardy';

const app = express()

const ClipboardListener = require('clipboard-listener');

dotenv.config()
const port = process.env.PORT || 3001
const serverUrl = process.env.SERVER_BASE_URL || "http://localhost:3000"

const socket = io(serverUrl);

let clipboardData: any;

const clipboardListener = new ClipboardListener({
    timeInterval: 100, // Default to 250
    immediate: true, // Default is false
});

const startListening = () => {
    console.log("Started Listening to Clipboard");
    clipboardListener.on('change', (value: any) => {
        clipboardData = value;
        console.log(value);
        let clipboard: ClipboardData = {
            id: uuid(),
            clipboard: value
        };
        socket.emit("clipboard-send", clipboard);
    });
}


const initSocket = () => {
    socket.on("connection", (...args) => {
        console.log("Connected to Server");
    });
    socket.on("clipboard-receive", (data: ClipboardData) => {
        console.log(`Data received ${data.clipboard} from socket ${socket}`);
        clipboardy.writeSync(data.clipboard);
    });
}

app.listen(port, () => {
    console.log(`Connected and Listening on Port : ${port}`)
    startListening()
    initSocket()
});