
export default function Props() {
  return (
    <div>Props</div>
  )
}

// export function Add(props){
//   console.log(props);
  
//     return (
//         <>
//         <h1>a = {props.x}</h1>
//         <h1>b = {props.b}</h1>
//         <h1>a+b ={props.x + props.b}</h1>
//         </>
//     )
// }

// export function Add(props){
//   console.log(props);
//   const {x,b} = props
//     return (
//         <>
//         <h1>a = {x}</h1>
//         <h1>b = {b}</h1>
//         <h1>a+b ={x + b}</h1>
//         </>
//     )
// }

export function Add({a,b,c}){
    return (
        <>
        <h1>a = {a}</h1>
        <h1>b = {b}</h1>
        <h1>a+b ={a + b}</h1>
        </>
    )
}