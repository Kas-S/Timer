import {Timer, Buttons} from "./components"
import {useState, useCallback, useRef, useEffect} from "react"

function App() {
  const [minutes, setMinutes] = useState(3),
        [seconds, setSeconds] = useState(0),
        [started, setStarted] = useState(false)
  const initialMinutes = useRef(3),
        initialSeconds = useRef(0)

    useEffect(() => {
        let m = minutes,
            s = seconds
        const t = setInterval(() => {
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
                clearInterval(t)
            }
        }, 1000)
        if (!started) clearInterval(t)
        return () => clearInterval(t)
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

  const reset = useCallback(() => {
      stop()
      setMinutes(initialMinutes.current)
      setSeconds(initialSeconds.current)
  }, [])


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
      <Buttons start={start} reset={reset} stop={stop}/>
    </>
  )
}

export default App
