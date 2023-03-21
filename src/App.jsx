import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Quize from './component/Quize';
import Start from './component/Start';
import Timer from './component/Timer';

function App() {
  const [queNumber, setQueNumber] = useState(1);
  const [username, setUserName] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");


  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false
        },
        {
          text: "Watches",
          correct: true
        },
        {
          text: "Food",
          correct: false
        },
        {
          text: "Cosmetic",
          correct: false
        }]
    },
    {
      id: 2,
      question: "When did the website 'Facebook' launch?",
      answers: [
        {
          text: "2004",
          correct: true
        },
        {
          text: "2005",
          correct: false
        },
        {
          text: "2006",
          correct: false
        },
        {
          text: "2007",
          correct: false
        }]
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false
        },
        {
          text: "Leonarrdo Di Caprio",
          correct: false
        },
        {
          text: "Denzel Washington",
          correct: false
        },
        {
          text: "Daniel Red Cliff",
          correct: true
        }]
    },
    {
      id: 4,
      question: "Which word is the odd man out?",
      answers: [
        {
          text: "trivial",
          correct: false
        },
        {
          text: "important",
          correct: true
        },
        {
          text: "unimportant",
          correct: false
        },
        {
          text: "insignificant",
          correct: false
        }]
    },
    {
      id: 5,
      question: "According to a schedule, the restaurant’s floors are polished on either",
      answers: [
        {
          text: "Tuesday or Wednesday",
          correct: false
        },
        {
          text: "Tuesday or Thursday",
          correct: false
        },
        {
          text: "Wednesday or Thursday",
          correct: true
        },
        {
          text: "Thursday or Saturday",
          correct: true
        }]
    },
    {
      id: 6,
      question: "Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?",
      answers: [
        {
          text: "10",
          correct: false
        },
        {
          text: "16",
          correct: false
        },
        {
          text: "13",
          correct: false
        },
        {
          text: "15",
          correct: true
        }]
    },
    {
      id: 7,
      question: " Paw : Cat :: Hoof : ? ",
      answers: [
        {
          text: "Lamb",
          correct: false
        },
        {
          text: "Tiger",
          correct: false
        },
        {
          text: "Elephant",
          correct: false
        },
        {
          text: "Horse",
          correct: true
        }]
    },
    {
      id: 8,
      question: "Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?",
      answers: [
        {
          text: "22",
          correct: false
        },
        {
          text: "24",
          correct: false
        },
        {
          text: "25",
          correct: true
        },
        {
          text: "26",
          correct: false
        }]
    },
    {
      id: 9,
      question: "Pick the odd man out?",
      answers: [
        {
          text: "just",
          correct: false
        },
        {
          text: "fair",
          correct: false
        },
        {
          text: "equitable",
          correct: false
        },
        {
          text: "biased",
          correct: true
        }]
    },
    {
      id: 10,
      question: "Melt : Liquid :: Freeze : ? ",
      answers: [
        {
          text: "Ice",
          correct: false
        },
        {
          text: "Solid",
          correct: true
        },
        {
          text: "Condense",
          correct: false
        },
        {
          text: "Push",
          correct: false
        }]
    },
    {
      id: 11,
      question: "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
      answers: [
        {
          text: "3.6",
          correct: false
        },
        {
          text: "7.2",
          correct: true
        },
        {
          text: "8.4",
          correct: false
        },
        {
          text: "10",
          correct: false
        }]
    },
    {
      id: 12,
      question: "Y is in the East of X which is in the North of Z. If P is in the South of Z, then in which direction of Y, is P?",
      answers: [
        {
          text: "North",
          correct: false
        },
        {
          text: "South",
          correct: false
        },
        {
          text: "South-East",
          correct: false
        },
        {
          text: "None of these",
          correct: true
        }]
    },
    {
      id: 13,
      question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
      answers: [
        {
          text: "Asia",
          correct: false
        },
        {
          text: "Africa",
          correct: true
        },
        {
          text: "Europe",
          correct: false
        },
        {
          text: "Australia",
          correct: false
        }]
    },
    {
      id: 14,
      question: "Garampani sanctuary is located at",
      answers: [
        {
          text: "Junagarh, Gujarat",
          correct: false
        },
        {
          text: "Diphu, Assam",
          correct: true
        },
        {
          text: "Kohima, Nagaland",
          correct: false
        },
        {
          text: "Gangtok, Sikkim",
          correct: false
        }]
    },
    {
      id: 15,
      question: "Who is the first President of India National Congress",
      answers: [
        {
          text: "Dadabhai Naoroji",
          correct: false
        },
        {
          text: "M K Gandhi",
          correct: false
        },
        {
          text: "George Yule",
          correct: false
        },
        {
          text: "W C Bonnerjee",
          correct: true
        }]
    },

  ]
  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 400" },
      { id: 5, amount: "$ 500" },
      { id: 6, amount: "$ 1000" },
      { id: 7, amount: "$ 2000" },
      { id: 8, amount: "$ 4000" },
      { id: 9, amount: "$ 8000" },
      { id: 10, amount: "$ 16000" },
      { id: 11, amount: "$ 32000" },
      { id: 12, amount: "$ 64000" },
      { id: 13, amount: "$ 125000" },
      { id: 14, amount: "$ 250000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
    []
  );

  useEffect(() => {
    queNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === queNumber - 1).amount);
  }, [moneyPyramid, queNumber])

  return (
    <div className="App">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className='endText'>You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} queNumber={queNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Quize
                    data={data}
                    setStop={setStop}
                    queNumber={queNumber}
                    setQueNumber={setQueNumber} />
                </div>
              </>

            )}


          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li className={queNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmt'>{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>

        </>
      ) : <Start setUserName={setUserName} />}
    </div>
  );
}

export default App;
