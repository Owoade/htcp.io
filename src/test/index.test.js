import { io as Client } from "socket.io-client";
import { assert } from "chai";
import htcpio  from "./htcp.io.js"


describe("htcp.io tests", () => {
 let req, ClientServer;
  before((done) => {
    const io = htcpio()
    io.listen(3000, "Testing server", done);
    req = io.req
    ClientServer = new Client("http://localhost:3000")
  });

  after(() => {
    process.exit();
  });

  it("it should get users", (done) => {

    ClientServer.emit("get-users", "server")

    ClientServer.on("get-users", (data)=>{
      assert.deepEqual(data, [ "makinde", "segun", "tayo"])
      done()
    })

    req("get-users",()=>{
      return [ "makinde", "segun", "tayo"];
    })

  });

 
});