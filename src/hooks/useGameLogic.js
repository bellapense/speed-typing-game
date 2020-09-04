import {useState, useEffect, useRef} from "react"

/**
 * All business logic for the typing game.
 *
 * @returns {
 *  {
 *      textareaRef: React.MutableRefObject<null>,
 *      wordCount: number,
 *      handleChange: handleChange,
 *      timeRemaining: number,
 *      updateGameLength: updateGameLength,
 *      text: string,
 *      startGame: startGame,
 *      isTimeRunning: boolean
 *  }}
 */
function useGameLogic() {
    const [text, setText] = useState("")
    const [gameLength, setGameLength] = useState(10)
    const [timeRemaining, setTimeRemaining] = useState(gameLength)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    const textareaRef = useRef(null)

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    function updateGameLength(time) {
        setTimeRemaining(time)
        setGameLength(time)
    }

    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(gameLength)
        setText("")
        setWordCount(0)
        textareaRef.current.disabled = false
        textareaRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }

    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    return {textareaRef, handleChange, text, isTimeRunning, timeRemaining, updateGameLength, startGame, wordCount}
}

export default useGameLogic