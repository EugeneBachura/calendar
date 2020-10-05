import React, { useState } from "react";
import MonthHeader from "./Calendar/MonthHeader";
import Weekdays from "./Calendar/Weekdays";
import Days from "./Calendar/Days"

const datanow = new Date();

function App() {
  const [month, setMonth] = useState(datanow.getMonth());
  const [year, setYear] = useState(datanow.getYear() + 1900);

  return (
    <div className="wrapper">
      <h1>Calendar</h1>
      <MonthHeader month={month} year={year} monthChange={monthChange} />
      <Weekdays />
      <Days month={month} year={year}/>
    </div>
  );

  function monthChange(add) {
    let newMonth = month + add;
    if (newMonth === 12) {
      newMonth = 0;
      setYear(year + 1);
    }
    if (newMonth === -1) {
      newMonth = 11;
      setYear(year - 1);
    }
    setMonth(newMonth);
  }
}

export default App;
