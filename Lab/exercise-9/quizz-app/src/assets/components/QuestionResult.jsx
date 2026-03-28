/* eslint-disable react/prop-types */
import { Questions } from "./Question";
import Correct from '../images/check.png';
import Wrong from '../images/cross.png';

export default function QuestionResults({ score, Answers }) { 
    const totalQuestions = Questions.length;
    const percentage = score*10
    const wrongAnswers = totalQuestions - score;
    return (
        <div className="grid justify-items-center justify-center gap-y-8 mt-10">
            <div className="grid p-8 bg-sky-500 rounded-lg">
                <h1 className="text-4xl font-bold text-center">Quiz completed</h1>
                <div className="flex items-center justify-center gap-x-4 mt-4">
                    <div className="grid justify-center justify-items-center p-4 rounded-lg bg-red-300">
                        <span className="text-6xl font-bold">{percentage}%</span>
                        <p>Percentage</p>
                    </div>
                    <div className="grid justify-items-center rounded-lg bg-red-300 p-4">
                        <span className="text-6xl font-bold">{score}</span>
                        <p>Right Answers</p>
                    </div>
                    <div className="grid justify-items-center rounded-lg bg-red-300 p-4">
                        <span className="text-6xl font-bold">{wrongAnswers}</span>
                        <p>Wrong Answers</p>
                    </div>
                </div>
            </div>

            <div className="grid bg-zinc-500 m-2 p-2 rounded-lg">
                {Answers.map((answer, id) => {
                    let isCorrect = Questions[id].answer === answer;
                    return (
                        <div key={id} className="w-[800px] grid justify-center justify-items-center m-1 p-4 bg-slate-400 relative">
                            <span className="absolute right-4 p-4">
                                {isCorrect ? (
                                    <img src={Correct} alt="Correct" style={{ width: '60px', height: '60px' }} />
                                ) : (
                                    <img src={Wrong} alt="Wrong" style={{ width: '60px', height: '60px' }} />
                                )}
                            </span>
                            <h1 className="text-2xl font-bold w-[600px] text-center">
                                {Questions[id].question}
                            </h1>
                            <h1 className="text-[20px]">{answer || 'Skipped'}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
