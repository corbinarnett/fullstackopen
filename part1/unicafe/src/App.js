import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Result = ({ text, total }) => {
  return (
    <h3>
      {text} {total}
    </h3>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  if (all === 0) {
    return <h3>No feedback given</h3>;
  }
  const avg = (1 / all) * (good - bad);
  const positive = ((good / all) * 100).toFixed(2);
  return (
    <table>
      <thead>
        <tr>
          <Header text="Statistics" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <Result text="Good:" total={good} />
        </tr>
        <tr>
          <Result text="Neutral:" total={neutral} />
        </tr>
        <tr>
          <Result text="Bad:" total={bad} />
        </tr>
        <tr>
          <Result text="Total Feedback:" total={all} />
        </tr>
        <tr>
          <Result text="Average:" total={avg} />
        </tr>
        <tr>
          <Result text="Positve:" total={positive + "%"} />
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="Give Feedback" />
      <Button
        handleClick={() => {
          // console.log("value now", good + 1);
          setGood(good + 1);
        }}
        text="good"
      />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
