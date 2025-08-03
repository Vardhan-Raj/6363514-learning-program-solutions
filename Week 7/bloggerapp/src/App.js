import React, { useState } from "react";
import "./App.css";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  const handleToggleCourses = () => {
    setShowCourses(!showCourses);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="mystyle1">
          <h1>Course Details</h1>
          <button onClick={handleToggleCourses}>
            {showCourses ? "Hide Courses" : "Show Courses"}
          </button>
          {showCourses && <CourseDetails />}
        </div>

        <div className="st2">
          <h1>Book Details</h1>
          {showBooks ? <BookDetails /> : null}
          <button onClick={() => setShowBooks(!showBooks)}>
            {showBooks ? "Hide Books" : "Show Books"}
          </button>
        </div>

        <div className="v1">
          <h1>Blog Details</h1>
          {showBlogs && <BlogDetails />}
          <button onClick={() => setShowBlogs(!showBlogs)}>
            {showBlogs ? "Hide Blogs" : "Show Blogs"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;