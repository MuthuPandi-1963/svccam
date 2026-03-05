import InputProp from "../utils/Input";

export default function Signup() {
  return (
   <div className="form">
    <InputProp 
        name={"Name"}
        type={"text"}
        id={"name"}
        mantatory={true}
    />
    <InputProp 
        name={"Email Address"}
        type={"email"}
        id={"email"}
        mantatory={true}

    />
    <InputProp 
        name={"Country"}
        type={"text"}
        id={"country"}
        placeholder={"enter a country"}
    />
    <InputProp 
        name={"Phone"}
        type={"number"}
        id={"number"}
        mantatory={true}

    />
    <InputProp 
        name={"Password"}
        type={"password"}
        id={"pwd"}
        mantatory={true}

    />
   </div>
  )
}
