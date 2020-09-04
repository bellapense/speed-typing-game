import React, {useState, useEffect} from "react"
import "../styles/TimeSelector.css"

function TimeSelector(props){
    const [selectedTime, setSelectedTime] = useState(10)
    const times = [5, 10, 15, 30]

    function updateSelectedTime(time) {
        props.updateGameLength(time)
        setSelectedTime(time)
    }

    function isSelected(time){
        return selectedTime === time
    }

    useEffect(() => {
        props.updateGameLength(selectedTime)
    }, [props.isTimeRunning])

    const buttons = times.map(time =>
        <button
            key={`time-${time}`}
            className={`time ${isSelected(time) ? "selected" : ""}`}
            onClick={() => updateSelectedTime(time)}
            disabled={props.isTimeRunning}
        >
            {time}
        </button>
    )

    return (
        <div className="time-selector">
            {buttons}
        </div>
    )
}

export default TimeSelector