import React from "react"
import useGameLogic from "./hooks/useGameLogic"
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

  return (
      <div>
        <h1>How fast do you type?</h1>
        <textarea
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

