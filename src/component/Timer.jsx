import { useEffect,useState } from 'react';


export default function Timer({setStop,queNumber}) {

    const [Timer,setTimer] = useState(30);

    useEffect(()=> {
        if (Timer === 0) return setStop(true);
        const interval = setInterval(()=>{
            setTimer((prev)=> prev - 1)
        }, 1000)

        return () => clearInterval(interval);

    },[setStop,Timer]);

    useEffect(()=>{
        setTimer(30)
    },[queNumber])
    
  return Timer
}
