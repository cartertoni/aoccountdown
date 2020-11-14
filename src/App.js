import './App.css';
import Time from './Time'

import React, {useState, useEffect} from "react"

//set birthday
const AOCBIRTHDAY = new Date('October 13, 2024 00:00:00 GMT-05:00')

const App = () => {

  //initialize countdown until birthday
  const [milliseconds, setMilliseconds] = useState(AOCBIRTHDAY.getTime() - Date.now())
  const [seconds, setSeconds] = useState(Math.floor(milliseconds / (1000) % 60))
  const [minutes, setMinutes] = useState(Math.floor(milliseconds / (1000 * 60) % 60))
  const [hours, setHours] = useState(Math.floor(milliseconds / (1000 * 60 * 60) % 24))
  const [days, setDays] = useState(Math.floor(milliseconds / (1000 * 60 * 60 * 24) % 365))
  const [years, setYears] = useState(Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365)))

  //function to re-calculate countdown
  const calculateTime = () => {
    setMilliseconds(AOCBIRTHDAY.getTime() - Date.now())
    setYears(Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365)))
    setDays(Math.floor(milliseconds / (1000 * 60 * 60 * 24) % 365))
    setHours(Math.floor(milliseconds / (1000 * 60 * 60) % 24))
    setMinutes(Math.floor(milliseconds / (1000 * 60) % 60))
    setSeconds(Math.floor(milliseconds / (1000) % 60))
  }

  useEffect( () => {
    const timer = setTimeout( () => {
      calculateTime() //call countdown calculation
    }, 200)
    return () => clearTimeout(timer)
  }, [milliseconds])

  return (
    <div class="main">
      <div class="clock">
        <Time count={years} unit="years" />
        <Time count={days} unit="days" />
        <Time count={hours} unit="hours" />
        <Time count={minutes} unit="minutes" />
        <Time count={seconds} unit="seconds" />
        <div class="clock-element">
          <h4>until AOC is old enough to be President</h4>
        </div>
      </div>
    </div>
  )
}

export default App
