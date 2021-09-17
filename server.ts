import express from 'express';
import dotenv from 'dotenv';
const ClipboardListener = require('clipboard-listener');

dotenv.config()
const port = process.env.PORT || 3000

const app = express();

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
    });
}

app.get("/", (req, res) => {
    let message = "Hello World";
    res.status(200).send({ message, clipboardData });
});

app.listen(port, () => {
    console.log(`Connected and Listening on Port : ${port}`);
    startListening()
});
