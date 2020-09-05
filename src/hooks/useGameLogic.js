import {useState, useEffect} from "react"

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
    const [displayResults, setDisplayResults] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    let randomWords = require('random-words')

    function wordCompleted() {
        setWordCount(prevWordCount => prevWordCount + 1)
        const word = randomWords({exactly: 1, maxLength: 8})
        setWord(word.toString().toUpperCase())
    }

    function updateGameLength(time) {
        setTimeRemaining(time)
        setGameLength(time)
    }

    function startGame() {
        setDisplayResults(false)
        setIsTimeRunning(true)
        setTimeRemaining(gameLength)
        setWordCount(0)
        const word = randomWords({exactly: 1, maxLength: 8})
        setWord(word.toString().toUpperCase())
    }

    function endGame() {
        setIsTimeRunning(false)
        setDisplayResults(true)
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

    return {
        isTimeRunning, timeRemaining, gameLength, updateGameLength,
        startGame, word, wordCompleted, wordCount, displayResults
    }
}

export default useGameLogic