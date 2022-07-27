import htcpio from "./htcp.io";
import { users, type IUser } from "./htcp.io/data";

const { listen, req } = htcpio();

req("get-status", () => {
  return true
})

req("get-users", () => {
  return users
})

req("add-user", ( user: IUser  )=>{
  users.push({...user, id: Date.now() });
  return {
    user,
    message: "User added successfully"
  }
})

req( "update-user", ({id, update}:{id: number, update: Partial<IUser>})=>{
  const user = users.find( _ => _.id === id) as IUser 
  if( !user ) return "user not found"

   users.filter( _ => _.id !== id).concat( [{ ...user, ...update }] );

  return { ...user, ...update }

})

req("delete-user", (id) => {
   users.filter( _ => _.id !== id ) 
  return { user: users.find( _ => _.id === id), message: "User deleted successfully" }
})





listen(3000, "Server has connected")