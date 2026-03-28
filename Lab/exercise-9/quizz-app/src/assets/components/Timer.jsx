/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'
export default function Timer({timeOut,onTimeOut}) {

    const [timer, setTimer] = useState(timeOut)
    useEffect(() => {
        const time=setTimeout(onTimeOut, timeOut);
        return ()=>{
            clearTimeout(time)
        }
    }, [timeOut,onTimeOut])
    
    useEffect(() => {
        const interval=setInterval(() => {
            setTimer(prevTimer=>prevTimer-1000)
        }, 1000);
    
      return () => {
        clearInterval(interval)
      }
    }, [])
    let cssclass=' text-lg font-bold '
    if(Math.floor(timer/1000)%2==0){
        cssclass +='text-red-500'
    }else{
        cssclass+="text-blue-900"
    }
    return <h1 className={cssclass}
    >Time left <span>{Math.floor(timer/1000)}s</span></h1>
}