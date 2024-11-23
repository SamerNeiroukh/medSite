import React from "react";
import "../styles/Courses.css";

function Courses() {
  const courses = [
    {
      title: "קורס עזרה ראשונה בסיסי",
      description: "קורס זה מיועד ללמידה של יסודות עזרה ראשונה וטיפול חירום.",
    },
    {
      title: "קורס עזרה ראשונה מתקדמת",
      description: "קורס מתקדם למתן טיפול במצבי חירום מורכבים.",
    },
    {
      title: "קורס החייאה ותפעול דפיברילטור",
      description: "לימוד והכשרה לשימוש בדפיברילטור וטכניקות החייאה.",
    },
    {
      title: "קורס חירום לעסקים",
      description: "קורס מותאם לעסקים להתמודד עם מצבי חירום ועזרה ראשונה.",
    },
  ];

  return (
    <div className="courses-page">
      <h1 className="courses-title">קורסים</h1>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <button className="register-button">הרשמה</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
