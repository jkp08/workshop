import { useState } from "react"
import { Header } from "./components/Header"
import Table from "./components/Table"

interface Todo {
  name: string
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([])
  const [name, setName] = useState<string>("")

  const handleAddTodos = () => {
    if (name === "") return

    setTodo((prev) => {
      return [...prev, {
        name: name
      }]
    })
    setName("")
  }

  const handleDeleteTodos = (index: number) => {
    const tempTodos = [...todo].filter((t, i) => {
      if (index != i) return t
    })
    console.log(tempTodos);
    setTodo(tempTodos)
  }

  return (
    <>
      {/* <Header /> */}
      <div style={{ display: "flex", gap: "12px" }}>
        <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={handleAddTodos}>Add</button>
      </div>
      <div>
        <h1>MY TODOS</h1>
        <ul>
          {
            todo.map((e, i) => (
              <div key={e.name} style={{ display: "flex", gap: "12px", cursor: "pointer", alignItems: "center" }}>
                <li >{e.name}</li>
                <span onClick={() => handleDeleteTodos(i)}> ❌ </span>
              </div>
            ))
          }
        </ul>
      </div>
      {/* <Table/> */}
    </>
  )
}

export default App
