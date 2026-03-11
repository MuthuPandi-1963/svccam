import React, { useState } from 'react'
import axios from 'axios'
import Signup from './components/Signup'
export default function App() {
  const [data, setData] = useState([])
  function HandleClick(){
    getDataFromBackend()
  }
  async function getDataFromBackend(){
    const response =await axios.get("http://localhost:8080/api/test/users")
    console.log(response);
    setData(response.data)
    
  }
  return (
    <div>
      <Signup/>
      <button onClick={HandleClick}>Get Data</button>
      <table border={1}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>isVerified</th>
          </tr>
        </thead>
        <tbody>
      {data.map((val,id)=>(
        <tr className="" key={id}>
          <td>{val.userId}</td>
          <td>{val.username}</td>
          <td>{val.email}</td>
          <td>{val.password}</td>
          <td>{val.isVerified ? "Yes" : "No"}</td>
        </tr>
      ))}
            </tbody>
      </table>
      </div>
  )
}
