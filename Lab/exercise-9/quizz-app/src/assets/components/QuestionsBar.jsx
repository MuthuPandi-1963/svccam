import {  useCallback, useState,useEffect } from 'react'
import {Questions} from './Question.js';
import QuestionResults from './QuestionResult.jsx';
import Timer from './Timer.jsx';
export default function QuestionsBar() {
    const [userAnswers, setUserAnswers] = useState([])
    const [selectedAnswers, setSelectedAnswers] = useState(null)
    const [showFeedback, setShowFeedback] = useState(false)
    const [score,setScore]=useState(0)
    const [shuffledAns,setShuffledAns]=useState([])
    const activeQnIndex =userAnswers.length;
    const QuizComplete =activeQnIndex ===Questions.length;
    useEffect(() => {
        if(Questions[activeQnIndex]){
        const shuffleOptions =[...Questions[activeQnIndex].options]
        shuffleOptions.sort(()=>Math.random()-0.5)
        setShuffledAns(shuffleOptions)
        }
    }, [activeQnIndex])
    
    const handleSelectAnswer=useCallback(function handleSelectAnswer(ans){
        setSelectedAnswers(ans)
        setShowFeedback(true)
            setTimeout(() => {
                setSelectedAnswers(null)
                setShowFeedback(false)
                setUserAnswers((prevAns)=>{
                if(ans === Questions[activeQnIndex].answer){
                    setScore(score+1)
                    return [...prevAns,ans]
                }
                else{
                    return [...prevAns,ans]
                }
            });
            
            
        },1000)
    },[activeQnIndex,score])
    const handleSkipAnswer =useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])
    if(QuizComplete){
        return <QuestionResults score={score} Answers={userAnswers}/>
    }
    
    return(
        // {logo ? <Logo onlogo={HandleLogo}/> :""} 
        <div className='grid justify-center m-4'>
        <div className='grid justify-center justify-items-center border-2 border-black p-8 tracking-wider w-[800px] gap-y-4 rounded-lg'>
            <h1 className="text-2xl font-bold">Question No - {activeQnIndex+1}</h1>
            <h1 className="text-xl font-bold">{Questions[activeQnIndex].question}</h1>
            <ul className='grid grid-cols-2' >
                {shuffledAns.map((val,id)=>{
                    let buttonClass=`button-default`
                        if (showFeedback) {
                            if(val == Questions[activeQnIndex].answer) buttonClass += ' button-correct'
                            else if(val===selectedAnswers)buttonClass+= ' button-wrong'

                          } return(
                            <button  onClick={()=>handleSelectAnswer(val)}
                            disabled={showFeedback}
                     className={buttonClass}
                    key={id}>{val}</button>
                
                          )
                }
            )} 
            </ul>
            <Timer key={activeQnIndex}
             onTimeOut={handleSkipAnswer} timeOut={10000}/>
        </div>
    </div>
    )
}