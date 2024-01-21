import './App.css';
import React, { useState, useEffect } from 'react';

let nowDate = new Date();
let dayNumber = nowDate.getDay() === 0 ? 6 : nowDate.getDay() - 1;
const days = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
const digitdayName = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const digitdayNameView = [
  ["d1", "d3", "d4", "d5", "d6", "d7"],
  ["d5", "d7"],
  ["d1", "d5", "d2", "d6", "d3"],
  ["d1", "d5", "d2", "d7", "d3"],
  ["d5", "d2", "d4", "d7"],
  ["d1", "d2", "d4", "d3", "d7"],
  ["d1", "d2", "d4", "d3", "d6", "d7"],
  ["d1", "d5", "d7"],
  ["d1", "d2", "d3", "d4", "d5", "d6", "d7"],
  ["d1", "d2", "d3", "d4", "d5", "d7"]
];

const App = () => {

  const [weekDay, setWeekDay] = useState(days[dayNumber]);
  const [hour, setHour] = useState(nowDate.getHours());
  const [minute, setMinute] = useState(nowDate.getMinutes());
  const [second, setSecond] = useState(nowDate.getSeconds());

  useEffect(() => {
    const intv = setInterval(() => {
      nowDate = new Date();
      dayNumber = nowDate.getDay() === 0 ? 6 : nowDate.getDay() - 1;
      setWeekDay(days[dayNumber]);
      setHour(nowDate.getHours());
      setMinute(nowDate.getMinutes());
      setSecond(nowDate.getSeconds());
    }, 1000);

    return () => {
      clearInterval(intv);
    }
  }, []);

  const clockFormatParse = () => {
    let h1, h2, m1, m2, s1, s2;

    h1 = hour < 10 ? h1 = "0" : h1 = hour.toString()[0];
    h2 = hour < 10 ? h2 = hour : h2 = hour.toString()[1];
    m1 = minute < 10 ? m1 = "0" : m1 = minute.toString()[0];
    m2 = minute < 10 ? m2 = minute : m2 = minute.toString()[1];
    s1 = second < 10 ? s1 = "0" : s1 = second.toString()[0];
    s2 = second < 10 ? s2 = second : s2 = second.toString()[1];
    return [h1, h2, ":", m1, m2, ":", s1, s2];
  }

  return (
    <div className="App">
      <div className="dark" id="clock" >
        <div className="display">
          <div className="weekdays">
            {days.map(wod => <span className={weekDay === wod ? "active" : ""}>{wod}</span>)}
          </div>
          <div className="digits">
            {
              clockFormatParse().map(c =>
                c === ":" ? (<div className="dots"></div>) : (<div className={digitdayName[c]}>
                  {digitdayNameView[c].map(v => <span className={v}></span>)}
                </div>)
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App