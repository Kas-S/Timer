import { FaAngleDown, FaAngleUp } from "react-icons/fa"

interface TimerProps {
    minutes: number,
    seconds: number,
    solidMinutesUpdate: (v: number) => void,
    solidSecondsUpdate: (v: number) => void
}

const Button = ({func, content}: {func: () => void, content: JSX.Element}) => {
    return (
        <button type="button" onClick={func}
                className="p-4 rounded-3xl bg-slate-500 text-white">
            {content}
        </button>
    )
}

function Timer({minutes, seconds, solidMinutesUpdate, solidSecondsUpdate}: TimerProps) {
    return (
        <table className="mx-auto mt-10 text-9xl">
            <tbody>
                <tr className="text-7xl">
                    <td className="text-center"><Button func={() => solidMinutesUpdate(minutes + 1)} content={<FaAngleUp/>}/></td>
                    <td></td>
                    <td className="text-center"><Button func={() => solidSecondsUpdate(Math.min(seconds + 1, 59))} content={<FaAngleUp/>}/></td>
                </tr>
                <tr className="font-bold">
                    <td className="text-center py-5">{minutes}</td>
                    <td className="text-center px-2">:</td>
                    <td className="text-center">{seconds.toString().length == 1 ? `0${seconds}` : seconds}</td>
                </tr>
                <tr className="text-7xl">
                    <td className="text-center"><Button func={() => solidMinutesUpdate(Math.max(minutes - 1, 0))} content={<FaAngleDown/>}/></td>
                    <td></td>
                    <td className="text-center"><Button func={() => solidSecondsUpdate(Math.max(seconds - 1, 0))} content={<FaAngleDown/>}/></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Timer