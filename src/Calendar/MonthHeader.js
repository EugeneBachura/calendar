import React from "react";

const months = "январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь".split(
  ","
);

export default function MonthHeader({ month, year, monthChange }) {
  return (
    <div className="monthHeader">
      <div onClick={() => alert('d')}>{year}</div>
      <div>
        <button onClick={() => monthChange(-1)}> {'<'} </button>
        <div className="month">{months[month]}</div>
        <button onClick={() => monthChange(1)}>{'>'}</button>
        
      </div>
    </div>
  );
}
