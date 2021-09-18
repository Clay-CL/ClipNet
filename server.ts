import express from 'express';
import dotenv from 'dotenv';
import { createServer } from "http";
import { Server, Socket, } from "socket.io";
import cors from 'cors';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import ClipboardData from './models/clipboard.model';

dotenv.config()
const port = process.env.SERVER_PORT || 3000

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {
    /* options here */
});

// listen to events
const listen = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>) => {
    socket.on("clipboard-send", (data: ClipboardData) => {
        console.log(`Clipboard Data ${data.clipboard} from socket ${socket}`);
        socket.broadcast.emit("clipboard-receive", data)
    });
}

io.on("connection", (socket) => {
    listen(socket)
});

httpServer.listen(port, () => {
    console.log(`Connected and Listening on Port : ${port}`);
});
