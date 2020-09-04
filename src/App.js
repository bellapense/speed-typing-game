import React from "react"
import useGameLogic from "./hooks/useGameLogic"
import GameDisplay from "./components/GameDisplay";
import TimeSelector from "./components/TimeSelector"

import "./styles/App.css"

function App() {
    const {
        textareaRef,
        handleChange,
        text,
        isTimeRunning,
        timeRemaining,
        updateGameLength,
        startGame,
        wordCount
    } = useGameLogic()

    const word = "WORD"  //TODO: Move to logic hook and randomize

    return (
        <div>
            <h1>How fast do you type?</h1>
            <GameDisplay
                word={word}
            />
            <textarea
                hidden={true}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
                ref={textareaRef}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <TimeSelector
                updateGameLength={updateGameLength}
                isTimeRunning={isTimeRunning}
            />
            <button
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App

