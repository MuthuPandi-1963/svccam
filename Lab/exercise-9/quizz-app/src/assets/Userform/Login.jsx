import  { Input,Button } from "./Input";
// import {useState} from 'react'
// import Input from './Input'
export default function Login() {
    // const [userData, setUserData] = useState({})
    function HandleUserData(event){
        event.preventDefault()
        const formData =new FormData(event.target)
        console.log(formData);
        const Uservalue=Object.fromEntries(formData.entries())
        console.log(Uservalue);
        event.target.reset();
    }
    return(
        <>
        <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="w-full max-w-md p-8 space-y-8 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-center">Sign Up</h2>
        <form onSubmit={(event)=>{HandleUserData(event)}}>
    <div className="grid gap-y-4">
    <Input type="text" name="UserName"/>
    <Input type="email" name="Email"/>
    <Input type="password" name="Password"/>
    <Input type="password" name="Confirm_Password"/>
    <Button type="button" name="Button"/>
    <Button type="reset" name="Reset"/>
    <Button type="submit" name="Sign-Up"/>
    </div>
        </form>
    <p className="text-center text-sm text-gray-500 mt-4">
      Already have an account? <a href="#" className="text-blue-500 underline">Login</a>
    </p>
  </div>
</div>
    </> 
    )
};
