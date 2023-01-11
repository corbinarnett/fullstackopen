import React, { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Votes = ({ votes }) => <p>has {votes} votes</p>;
const Header = ({ text }) => <h1>{text}</h1>;
const Anecdote = ({ text }) => <p>{text}</p>;

const App = () => {
  const [selected, setSelected] = useState(0);
  // fill an an array with the length of the anecdotes array with zeros
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const voteForAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const nextAnecdote = () => {
    if (selected < anecdotes.length - 1) {
      return setSelected(selected + 1);
    }
    return setSelected(0);
  };

  // find the highest value in the array of votes
  const highestVotes = Math.max(...votes);
  // set a value with the correct anecdote based on the index of the value with the most votes
  const winningAnecdote = anecdotes[votes.indexOf(highestVotes)];

  return (
    <div>
      <React.StrictMode>
        <Header text="Anecdote of the day" />
        <Anecdote text={anecdotes[selected]} />
        <Votes votes={votes[selected]} />
        <Button onClick={voteForAnecdote} text="vote" />
        <Button onClick={nextAnecdote} text="next" />
        <Header text="Anecdote with most votes" />
        <Anecdote text={winningAnecdote} />
        <p>has {highestVotes} votes</p>
      </React.StrictMode>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
];

export default App;
