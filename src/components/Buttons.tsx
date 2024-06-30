interface ButtonsProps {
    start: () => void,
    stop: () => void,
    reset: () => void,
    pause: () => void
}

const Button = ({content, func}: {content: string, func: () => void}) => (
    <button type="button" onClick={func} className="p-4 rounded bg-blue-400 text-white font-bold text-lg">{content}</button>
)

function Buttons ({start, stop, reset, pause}: ButtonsProps) {
    return (
        <div className="flex items-center justify-center w-full mt-10 gap-3">
            <Button func={start} content="Start"/>
            <Button func={stop} content="Stop"/>
            <Button func={reset} content="Reset"/>
            <Button func={pause} content="Pause"/>
        </div>
    )
}

export default Buttons