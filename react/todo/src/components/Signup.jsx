import { useState } from "react";
import InputProp from "./Input";
import axios from "axios";
const staticFormData = {
    id : 0,
    name : "",
    email : "",
    password : ""
}
export default function Signup() {
    const [formValues,setFormValues] = useState(staticFormData)

    const handleChange = (e)=>{
        console.log(e.target);
        
        const {name,value} = e.target
        setFormValues((prev)=>(
            {...prev,[name]:value}
        ))
    }
    async function CreateUser(data) {
        const isVerified  = false

        const formObject = {
            id : data.id,
            username : data.name,
            password : data.password,
            email : data.email,
            isVerified : isVerified
        }
        const response =  await axios.post("http://localhost:8080/api/test/user",
            formObject
        )
        console.log(response);
        return response.data
        
    }
    function handleClick(){
        console.log(formValues);
        CreateUser(formValues)
    }
  return (
   <div className="form">
    <InputProp 
        name={"ID"}
        type={"number"}
        id={"number"}
        mantatory={true}
        value= {formValues.id}
        onChange={handleChange}
    />
    <InputProp 
        name={"Name"}
        type={"text"}
        id={"name"}
        mantatory={true}
        value= {formValues.name}
        onChange={handleChange}
    />
    <InputProp 
        name={"Email"}
        type={"email"}
        id={"email"}
        mantatory={true}
        value= {formValues.email}
        onChange={handleChange}
    />

    <InputProp 
        name={"Password"}
        type={"password"}
        id={"pwd"}
        mantatory={true}
        value={formValues.password}
        onChange={handleChange}

    />
    <button onClick={handleClick}>signup</button>
   </div>
  )
}
