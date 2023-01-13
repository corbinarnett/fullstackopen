import React from "react";

const Total = ({ course }) => {
  const exerciseArr = [];
  course.parts.map((part) => exerciseArr.push(part.exercises));
  const sumWithInitial = exerciseArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return <h4>total of {sumWithInitial} exercises</h4>;
};

export default Total;
