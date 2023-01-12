import React from "react";
import Header from "./Header";
import Part from "./Part";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />{" "}
      <ul>
        {course.parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </ul>
    </div>
  );
};

export default Course;
