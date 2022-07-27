import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

export default function htcpio() {

    const app = express();
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });

    return {
         listen(port, message, testSignal) {
            httpServer.listen(port).on("listening", () => {console.log(message); testSignal();})
        },
        req(event, responseCallback) {

            io.on("connection", (socket) => {
                socket.on(event, (req) => {
                    console.log(`Req made to ${event}`);
                    socket.emit(event, responseCallback(req));
                    socket.disconnect();
                })
            })

        }
    }

}