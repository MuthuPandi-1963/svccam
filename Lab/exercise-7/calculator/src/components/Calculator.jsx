import  { useState } from 'react'
export default function Calculator() {
    const [inputValue,setInputValue] = useState(0);
    const keyButtons = [
        "AC","X","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="
    ]
    const handleClick = (val)=>{
        if(val == "="){
            setInputValue(prev=>{
                try {
                    if(prev[0] == "0"){
                    return eval(prev.slice(1))
                }else{
                    return eval(prev)
                }
                } catch (error) {
                    setInputValue("NAN")
                }
                
            })
        }
        else if( val == "AC"){
            setInputValue(0)
        }else if (val == "X"){
            setInputValue(prev=>prev.slice(0,prev.length-1))
        }else{
            setInputValue(
                (prev)=>prev+val
            )
        }
        
    }
  return (
    <div className='calc-main'>
        <div className="calc">
            <input type="text" name="" id="" value={inputValue} readOnly/>
            <div className="calc-buttons">
                {
                keyButtons.map((val,id)=>(
                    <button 
                    className={id%4 == 3 ? "operator" : "others"} 
                    key={id} 
                    onClick={()=>handleClick(val)}
                    >
                        {val}
                    </button>
                ))
            }
            </div>
        </div>
    </div>
  )
}
