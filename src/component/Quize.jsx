import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from "../Assets/play.mp3"
import correct from "../Assets/correct.mp3"
import wrong from "../Assets/wrong.mp3"

function Quize({ data, setStop, queNumber, setQueNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const [letsPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)

  useEffect(()=>{
    letsPlay();
  },[letsPlay]);

  useEffect(() => {
    setQuestion(data[queNumber - 1]);
  }, [data, queNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handelClick = (a) => {
    setSelectAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong"));
    console.log(a)
    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () =>{
          setQueNumber((prev) => prev + 1);
          setSelectAnswer(null);  
        })
      } else {
        wrongAnswer();
        delay(1000, () =>{
          setStop(true);
        })
      }
    })
  };

  return (
    <div className='quize'>
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a)=> (
          <div className={selectAnswer === a ? className : "answer"}
            onClick={() => handelClick(a)}>{a.text} 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quize