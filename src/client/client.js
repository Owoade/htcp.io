
// /* Ensure you have the socket io script loaded on the dom before this script */
// function RequestClient( host ) {
//     if(!io){
//         console.error("The socket.io client is missing")
//     }
//     const socket = io( host )
//     return {
//         req(event) {
//             return new Promise((res, rej) => {
//                 socket.emit(event);
//                 socket.on(event, (response) => {
//                     res(response);
//                     return
//                 })
//                 socket.on("no-listener-attached", (err) => {
//                     rej(err)
//                 })
//             })
//         }
//     }

// }