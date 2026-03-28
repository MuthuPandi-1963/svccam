import Quiz from "../images/quiz.png"
export default function Logo() {
    return(
        <div className="grid justify-items-center justify-center gap-y-2">
            <img src={Quiz} alt="Quiz" style={{width:"150px"}}/>
            <h1 className="text-2xl font-bold">Quiz App</h1>
            <p>Start Your Challenge Now !!!</p>
        </div>
    )
}