
export default function Var() {
    const name = "Ram"

    const fruits = [
        "apple",
        "orange",
        "grapes",
        "kiwi"
    ]
  return (
    <>
    <h1>Name : {name} </h1>
    <h1>{fruits[0]}</h1>
    <h1>{fruits[1]}</h1>
    <h1>{fruits[2]}</h1>
    <h1>{fruits[3]}</h1>

    {
        fruits.map((val,id)=>(
            <button>{val}</button>
        ))
    }
    </>
  )
}
