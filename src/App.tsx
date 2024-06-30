import {Timer, Buttons} from "./components"
import {useState} from "react";

function App() {
  const [minutes, setMinutes] = useState(3),
        [seconds, setSeconds] = useState(0)

  const start = () => {}

  const reset = () => {}

  const pause = () => {}

  const stop = () => {}

  return (
    <>
      <Timer minutes={minutes}
             seconds={seconds}
             incMinutes={() => setMinutes(minutes + 1)}
             incSeconds={() => setSeconds(Math.min(seconds + 1, 59))}
             decMinutes={() => setMinutes(Math.max(minutes - 1, 0))}
             decSeconds={() => setSeconds(Math.max(seconds - 1, 0))}
      />
      <Buttons start={start} reset={reset} pause={pause} stop={stop}/>
    </>
  )
}

export default App
