import React from "react";

export default function Days({ month, year }) {
  let firstDay = new Date(year, month, 1)
  let firstWeekday = firstDay.getDay() === 0 ? 7 : firstDay.getDay()
  let daysInMonth =
    32 - new Date(firstDay.getFullYear(), firstDay.getMonth(), 32).getDate()

  return (
    <div className="days">
      <ul className="listDays">
        {[...Array(firstWeekday-1)].map((item, num) => (
          <li key={num}></li>
        ))}
        {[...Array(daysInMonth)].map((item, num) => (
          <li key={num}>{num + 1}</li>
        ))}
      </ul>
    </div>
  );
}
