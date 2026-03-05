import { useState } from "react"
import InputProp from "../utils/Input"

export default function TodoList() {
    const [todo,setTodo] = useState([
        "swimmming","running"
    ])
    const [todoName,setTodoName] = useState("")

    function handleChange(e) {
        setTodoName(e.target.value)
    }
    function handleAddTodo(){
        if(todoName.length >6){
           setTodo(
            (prev)=>([...prev,todoName])
        )
        setTodoName("")
        }
        
    }
    function handleDelete(val){
        setTodo((prev)=>{
            const balTodo = prev.filter(item=>item !== val)
            return balTodo;
        })
    }
  return (
    <div className="todo-list">
        {todo.map((val,id)=>(
            <button id="todo">
                <span>{val}</span> 
                <span onClick={()=>handleDelete(val)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2" viewBox="0 0 16 16">
  <path d="M14 3a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2M3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5s-3.69-.311-4.785-.793"/>
</svg></span></button>
        ))}
        <div className="todo-form"> 
            <label htmlFor="">Todo</label>
            <input 
            value={todoName}
            onChange={handleChange}
            type="text" 
            placeholder="enter a todo name" />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    </div>
  )
}
