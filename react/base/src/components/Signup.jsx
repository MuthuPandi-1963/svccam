import { useState } from "react";
import InputProp from "../utils/Input";

const staticFormData = {
    name : "",
    email : "",
    country : "",
    Phone : "",
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
    function handleClick(){
        console.log(formValues);
        
    }
  return (
   <div className="form">
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
        name={"Country"}
        type={"text"}
        id={"country"}
        placeholder={"enter a country"}
        value={formValues.country}
        onChange={handleChange}

    />
    <InputProp 
        name={"Phone"}
        type={"number"}
        id={"number"}
        mantatory={true}
        value={formValues.phone}
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
