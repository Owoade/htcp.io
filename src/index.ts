import htcpio from "./htcp.io";

const { listen, req } = htcpio();

req("get-status", ()=>{
  return true
})

req("get-users", ()=>{
    return [ "makinde", "segun", "tayo"]
})

listen( 3000, "Server has connected")