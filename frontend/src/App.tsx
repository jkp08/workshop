import { useEffect, useState } from "react"
import { AddUsers, type User } from "./components/AddUsers"
import Table from "./components/Table"


function App() {
  const [ users, setUsers ] = useState<User[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async() => {
    await fetch("http://localhost:8080/users/",{
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
    }).then(async (response) => {
        const data = await response.json();
        setUsers(data)
    }).catch((e) => {
      console.log(e);
    })
  }

  
  const deleteUsers = async(id: number) => {
   await fetch(`http://localhost:8080/users/${id}`,{
    method: "DELETE"
   }).then(async (res) => {
      const data = await res.json();
      if(res.status == 200){
        alert(data.message)
        fetchUsers()
      }
   })
  }

  return (
    <main className="p-4 justify-center items-centerz flex flex-col">
      <AddUsers fetchUsers={fetchUsers}/>
      <Table users={users} deleteUsers={deleteUsers}/>
    </main>
  )
}

export default App
