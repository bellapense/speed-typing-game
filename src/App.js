import React from "react"
import useGameLogic from "./hooks/useGameLogic"
import GameDisplay from "./components/GameDisplay";
import TimeSelector from "./components/TimeSelector"

import "./styles/App.css"

function App() {
    const {
        isTimeRunning,
        timeRemaining,
        updateGameLength,
        gameLength,
        startGame,
        word,
        wordCompleted,
        wordCount,
        displayResults,
    } = useGameLogic()

    return (
        <div>
            <h1>How fast do you type?</h1>
            <GameDisplay
                word={word}
                wordCompleted={wordCompleted}
                isDisabled={!isTimeRunning}
                gameLength={gameLength}
                displayResults={displayResults}
                wordCount={wordCount}
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

