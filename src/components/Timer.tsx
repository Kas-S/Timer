import {useState} from 'react'
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa"


const Button = ({func, content}: {func: () => void, content: JSX.Element}) => {
    return (
        <button type="button" onClick={func}
                className="p-4 rounded-xl bg-slate-500 text-white">
            {content}
        </button>
    )
}

function Timer() {
    const [minutes, setMinutes] = useState(3),
          [seconds, setSeconds] = useState(0)
    return (
        <table className="mx-auto mt-10 text-9xl">
            <tbody>
                <tr>
                    <td><Button func={() => setMinutes(minutes + 1)} content={<FaArrowCircleUp/>}/></td>
                    <td></td>
                    <td><Button func={() => setSeconds(Math.min(seconds + 1, 59))} content={<FaArrowCircleUp/>}/></td>
                </tr>
                <tr className="font-bold">
                    <td className="text-center py-5">{minutes}</td>
                    <td className="text-center px-2">:</td>
                    <td className="text-center">{seconds.toString().length == 1 ? `0${seconds}` : seconds}</td>
                </tr>
                <tr>
                    <td><Button func={() => setMinutes(Math.max(minutes - 1, 0))} content={<FaArrowCircleDown/>}/></td>
                    <td></td>
                    <td><Button func={() => setSeconds(Math.max(seconds - 1, 0))} content={<FaArrowCircleDown/>}/></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Timer