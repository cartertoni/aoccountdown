import React from "react"

    const Time = (props) => {
        return (
        <div class="clock-element">
            <strong>{props.count}</strong>
            <span>{props.unit}</span>
        </div>
        )
    }

export default Time