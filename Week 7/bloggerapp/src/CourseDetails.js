import React from "react";

const courses = [
  { id: 1, name: "Angular", date: "4/5/2021" },
  { id: 2, name: "React", date: "6/3/2020" },
];

const CourseDetails = () => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
