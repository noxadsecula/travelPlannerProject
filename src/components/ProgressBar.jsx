import { useState, useEffect } from "react";
export default function ProgressBar({timer}) {
    const [ remainingTime, setRemainingTime ] = useState(timer);


  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10)
    }, 10)

    return () => {
      clearInterval(intervalTimer);
    }

  }, [])



  return (<progress value={remainingTime} max={timer}/>)

}