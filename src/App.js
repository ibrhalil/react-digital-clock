import './App.css';
import React from 'react';

let nowDate = new Date();

let dayNumber = nowDate.getDay() === 0 ? 6 : nowDate.getDay() -1;

const days = ["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"];
const digitdayName = ["zero","one","two","three","four","five","six","seven","eight","nine"];
const digitdayNameView = [
                          ["d1","d3","d4","d5","d6","d7"],
                          ["d5","d7"],
                          ["d1","d5","d2","d6","d3"],
                          ["d1","d5","d2","d7","d3"],
                          ["d5","d2","d4","d7"],
                          ["d1","d2","d4","d3","d7"],
                          ["d1","d2","d4","d3","d6","d7"],
                          ["d1","d5","d7"],
                          ["d1", "d2", "d3","d4","d5","d6","d7"],
                          ["d1","d2","d3","d4","d5","d7"]
                        ]

class App extends React.Component {

  state = {
    today: nowDate,
    weekDay: days[dayNumber],
    hour: nowDate.getHours(),
    minute: nowDate.getMinutes(),
    second: nowDate.getSeconds()
  }

  componentDidMount()
  {
    setInterval(() => {
      nowDate = new Date();
      dayNumber = nowDate.getDay() === 0 ? 6 : nowDate.getDay() -1;
      this.setState({
        today: nowDate,
        weekDay: days[dayNumber],
        hour: nowDate.getHours(),
        minute: nowDate.getMinutes(),
        second: nowDate.getSeconds()
      })
    }, 1000);
  }

  clockFormatParse = () =>{
    let h1,h2,m1,m2,s1,s2;
    h1 = this.state.hour < 10 ? h1 = "0" : h1 = this.state.hour.toString()[0];
    h2 = this.state.hour < 10 ? h2 = this.state.hour : h2 = this.state.hour.toString()[1];

    m1 = this.state.minute < 10 ? m1 = "0" : m1 = this.state.minute.toString()[0];
    m2 = this.state.minute < 10 ? m2 = this.state.minute : m2 = this.state.minute.toString()[1];

    s1 = this.state.second < 10 ? s1 = "0" : s1 = this.state.second.toString()[0];
    s2 = this.state.second < 10 ? s2 = this.state.second : s2 = this.state.second.toString()[1];

    return [h1,h2,":",m1,m2,":",s1,s2];
  }

  render(){
    return (
      <div className="App">
        <div className="dark" id="clock" >
          <div className="display">
            <div className="weekdays">
              {days.map(wod => <span className={this.state.weekDay===wod ? "active" : ""}>{wod}</span>)}
            </div>
            <div className="digits">
              {

                this.clockFormatParse().map(c => 

                  c === ":" ? (<div className="dots"></div>) : (<div className={digitdayName[c]}>

                    {digitdayNameView[c].map(v => <span className={v}></span> )}

                  </div>)
                  
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;