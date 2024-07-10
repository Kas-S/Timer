import {Timer, Buttons} from "./components"
import {useState, useCallback, useRef, useEffect} from "react"

function App() {
  const [minutes, setMinutes] = useState(3),
        [seconds, setSeconds] = useState(0),
        [started, setStarted] = useState(false)
  const initialMinutes = useRef(3),
        initialSeconds = useRef(0)

    useEffect(() => {
        if (started) {
            let m = minutes,
                s = seconds
            setInterval(() => {
                if (s - 1 === -1 && m > 0) {
                    s = 59
                    m--
                } else {
                    s--
                }
                setMinutes(m)
                setSeconds(s)
                if (s === 0 && m === 0) {
                    stop()
                }
            }, 1000)
        }
    }, [started]);

  const updateMinutes = (v: number) => {
      setMinutes(v)
      initialMinutes.current = v
  }

  const updateSeconds = (v: number) => {
      setSeconds(v)
      initialSeconds.current = v
  }

  const start = useCallback(() => {
      setStarted(true)

  }, [])

  const reset = useCallback(() => {}, [])

  const pause = useCallback(() => {}, [])

  const stop = useCallback(() => {
        setStarted(false)
  }, [])

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
