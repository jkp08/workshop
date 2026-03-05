import React, { useState } from 'react'

export interface User{
  id?: number
  name: string;
  email: string;
  password: string;
}

interface AddUserProps {
  fetchUsers: () => void
}
export const AddUsers = ({ fetchUsers  }: AddUserProps) => {
  const [user, setUsers] = useState<User>({
    email: "",
    name: "",
    password : ""
  })

  const onChangeInput = (key: string,e:React.ChangeEvent<HTMLInputElement, HTMLInputElement> ) => {
    setUsers((prev) => {
      const temp = {...prev};
      // @ts-expect-error
      temp[key] = e.target.value;

      return temp
    })
  }

  const addUser = async() => {
    await fetch("http://localhost:8080/users/",{
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then(async (response) => {
        const data = await response.json();
        if(response.status == 400){
          alert(data?.message)
          return
        }  
        await fetchUsers()
    }).catch((e) => {
      console.log(e);
    })
  }

  return (
    <div className='flex flex-col gap-2'>
      <label className='text-semibold'>Email</label>
      <input onChange={(e) => onChangeInput("email",e)} type="text" className='px-2 border py-1 border-slate-200' value={user.email}/>

      <label className='text-semibold'>Name</label>
      <input onChange={(e) => onChangeInput("name",e)} type="text" className='px-2 border py-1 border-slate-200' value={user.name}/>
      
      
      <label className='text-semibold'>Password</label>
      <input onChange={(e) => onChangeInput("password",e)} type="password" className='px-2 border py-1 border-slate-200' value={user.password}/>
      
      
      <button onClick={addUser} className='border-2 rounded-2xl'>Add</button>
    </div>
  )
}
