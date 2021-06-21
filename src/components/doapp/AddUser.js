import React,{useState} from 'react'
import UserDetails from './UserDetails'

export default function AddUser() {
  const [users, setUsers] = useState(["India", "US"])
  const [uname, setUname] = useState("")

  const addUser = (e) =>{
    users.push(uname)
    // setUsers([...users,users])//wrong
    setUsers([...users],users) //only new get added
    console.log("users ->", users)
    //alert(users)
  }

  const deleteUserHandle = (item) =>{
    console.log("name and value are ->", item) //india/US
    //const filteruser = users.filter(item=>item!==i)
    // let array = [1, 2, 3, 4, 5]
    let newarray = users.filter(function(element) {
        return element != item
    });
    console.log("newarray ->", newarray); // ["India", "US"]
    console.log("users ->", users); //  ["India", "US", "sdsds"]

    setUsers(newarray)
  
    // onDeleteByIndex = (index) => {
      // const newCountries = [...this.state.countries];
      // newCountries.splice(index, 1);

      // this.setState(state => ({
      //     countries: newCountries
      // }));


    // const filteruser = users.splice((item=>item!==k)
    // console.log("filteruser", filteruser)
    // setUsers([])
    // setUsers([...users,filteruser])
  }
  return (
    <div>
      <h2> Add all the users</h2>
      <input type="text" name="uname" value={uname} onChange={(e)=>{setUname(e.target.value)}} />
      <button type="submit" onClick={addUser}>Add User</button><br/>
        {users.map((item,k)=>{
          return(
            <div key={k} onClick={()=>deleteUserHandle(item)} > {k} || {item}</div>
          ) 
        })}
          <hr />
      <UserDetails users={users} />
    </div>
  )
}
