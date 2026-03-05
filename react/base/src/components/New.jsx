
// export default function New() {
//     let a = 10;

//     function HandleClick() {
//         a++

//         console.log("inside fn", a);
//     }
//     console.log("outside  fn", a);

//     return (
//         <div>
//             <h1>{a}</h1>
//             <button onClick={HandleClick}>Increment</button>
//         </div>
//     )
// }

import { useState } from "react";
export default function New() {
    let a = 10;
    const [val,setVal] = useState(100)
    function HandleClick() { a++ ;console.log("inside fn", a);}
    function HandleValAdd(){ setVal(val+1) }
    function HandleValMinus(){ setVal(val-1) }
    function HandleValReset(){ setVal(0) }
    console.log("outside  fn", a);
    return (
        <div>
            <h1>{a}</h1>
            <h1>val : {val} </h1>
            <button onClick={HandleClick}>Increment</button>
            <button onClick={HandleValAdd}>val Increment</button>
            <button onClick={HandleValMinus}>val Decrement</button>
            <button onClick={HandleValReset}>val Reset</button>
        </div>
    )
}
