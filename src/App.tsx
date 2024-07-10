import {Timer, Buttons} from "./components"
import {useState, useCallback, useRef} from "react"

function App() {
  const [minutes, setMinutes] = useState(3),
        [seconds, setSeconds] = useState(0)
  const initialMinutes = useRef(3),
        initialSeconds = useRef(0)

  const updateMinutes = (v: number) => {
      setMinutes(v)
      initialMinutes.current = v
  }

  const updateSeconds = (v: number) => {
      setSeconds(v)
      initialSeconds.current = v
  }

  const start = useCallback(() => {}, [])

  const reset = useCallback(() => {}, [])

  const pause = useCallback(() => {}, [])

  const stop = useCallback(() => {}, [])

  return (
    <>
      <Timer minutes={minutes}
             seconds={seconds}
             solidMinutesUpdate={updateMinutes}
             solidSecondsUpdate={updateSeconds}
      />
      <Buttons start={start} reset={reset} pause={pause} stop={stop}/>
    </>
  )
}

export default App
