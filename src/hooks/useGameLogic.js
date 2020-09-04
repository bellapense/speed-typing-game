import {useState, useEffect, useRef} from "react"

/**
 * All business logic for the typing game.
 *
 * @returns {{wordCount: number, timeRemaining: number, startGame: startGame, word: string, isTimeRunning: boolean, updateGameLength: updateGameLength}}
 */
function useGameLogic() {
    const [word, setWord] = useState("")
    const [gameLength, setGameLength] = useState(10)
    const [timeRemaining, setTimeRemaining] = useState(gameLength)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    let randomWords = require('random-words')

    function wordCompleted() {
        //set word count ++
        setWordCount(prevWordCount => prevWordCount + 1)
        //set word to new word
        setWord(randomWords().toUpperCase())
    }

    function updateGameLength(time) {
        setTimeRemaining(time)
        setGameLength(time)
    }

    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(gameLength)
        setWordCount(0)
        setWord(randomWords().toUpperCase())
    }

    function endGame() {
        setIsTimeRunning(false)
        //setWordCount(calculateWordCount(text))
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

    return {isTimeRunning, timeRemaining, updateGameLength, startGame, word, wordCompleted, wordCount}
}

export default useGameLogic