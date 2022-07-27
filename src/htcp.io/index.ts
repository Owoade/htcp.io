import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";


interface IReqPayload {
    event: string;
}
export default function htcpio() {

    const app = express();
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });

    return {
        listen(port: number, message?: string) {
            httpServer.listen(port).on("listening", () => console.log(message))
        },
        req<T>(event: string, responseCallback: (req?: any) => T) {

            io.on("connection", (socket) => {
                socket.on(event, (req: any) => {
                    console.log(`Req made to ${event}`);
                    socket.emit(event, responseCallback(req));
                    socket.disconnect();
                })
            })

        }
    }

}