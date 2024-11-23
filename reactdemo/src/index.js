import React from 'react';
import ReactDOM from 'react-dom/client';
import Course from './basics/Course';
import CourseList from './basics/CourseList';

let courses = [
  { title: 'Power BI', fee: 10000, disrate: 10 },
  { title: 'Python', fee: 8000, disrate: 5 },
  { title: 'AWS', fee: 12000, disrate: 20 }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CourseList courses={courses} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
