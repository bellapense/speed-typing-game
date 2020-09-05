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
        if (charsMatched.length === charsToMatch.length && charsToMatch.length !== 0) {
            props.wordCompleted()
            setCharsMatched([])
        }
    }, [charsMatched, charsToMatch, props])

    useEffect(() => {
        if (props.displayResults === false) {
            setCharsMatched([])
        }
    }, [props.displayResults])


    const word = (charsToMatch.map((char, index) => {
        let isMatched = ""
        if ((index + 1) <= charsMatched.length) {
            isMatched = "matched"
        }
        return <span key={char+index} id={char+index} className={isMatched}>{char}</span>
    }))

    let results = null;
    if (props.displayResults === true) {
        results = (
            <span id="results">
                {props.wordCount} word{props.wordCount > 1 || !props.wordCount ? "s " : " "}
                typed in {props.gameLength} seconds
            </span>
        )
    }

    return (
        <div id="game-display" className={props.isDisabled ? "disabled" : ""}>
            <p id="the-word" className={props.isDisabled ? "disabled" : ""}>
                {word}
            </p>
            {results}
        </div>
    )
}

export default GameDisplay