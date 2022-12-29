import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  // setTimeout(() => setCounter(counter + 1), 1000);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);
  console.log("rendering...", counter);

  const Header = ({ course }) => {
    return <h1>{course}</h1>;
  };

  const Content = ({ parts }) => {
    return (
      <>
        <Part part={parts[0].name} exercise={parts[0].exercises} />
        <Part part={parts[1].name} exercise={parts[1].exercises} />
        <Part part={parts[2].name} exercise={parts[2].exercises} />
      </>
    );
  };

  const Part = ({ part, exercise }) => {
    return (
      <p>
        {part} {exercise}
      </p>
    );
  };

  const Total = ({ parts }) => {
    return (
      <p>
        Number of exercises{" "}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <div>
        <div>{counter}</div>
        <button onClick={increaseByOne}>plus</button>
        <button onClick={setToZero}>zero</button>
        <button onClick={decreaseByOne}>minus</button>
      </div>
    </div>
  );
};

export default App;
