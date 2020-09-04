import React, {useState, useEffect} from "react"

function GameDisplay(props) {
    const charsToMatch = props.word.split("")
    const [charEntered, setCharEntered] = useState("")
    const [charsMatched, setCharsMatched] = useState([])

    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('keydown', event => {
            const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            const key = event.key.toUpperCase()

            if (charList.indexOf(key) === -1) return

            setCharEntered(key)
        })
    })

    useEffect(() => {
        if (charEntered === charsToMatch[charsMatched.length] && !props.isDisabled) {
            setCharsMatched(prevCharsMatched => [...prevCharsMatched, charEntered])
        }
        setCharEntered("")
    }, [charEntered, charsMatched, charsToMatch, props.isDisabled])

    useEffect(() => {
        if (charsMatched.length === charsToMatch.length && !props.isDisabled) {
            props.wordCompleted()
            setCharsMatched([])
        }
    }, [charsMatched, charsToMatch, props])

    const word = (charsToMatch.map((char, index) => {
        let isMatched = ""
        if ((index + 1) <= charsMatched.length) {
            isMatched = "matched"
        }
        return <span key={index} className={isMatched}>{char}</span>
    }))

    return (
        <div id="game-display" className={props.isDisabled ? "disabled" : ""}>
            <p id="the-word" className={props.isDisabled ? "disabled" : ""}>
                {word}
            </p>
        </div>
    )
}

export default GameDisplay