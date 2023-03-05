import React from "react";
import CourseCard from "../course-card/CourseCard";
import Footer from "../footer/Footer";
import data from "../CourseData";
import "./course.css";

const Courses = ({ onId }) => {
  return (
    <section id="course">
      <div className="container">
        <h1 className="section-title">Our Popular Courses</h1>
        <div className="course__row">
          {data.map((item, id) => {
            return (
              <CourseCard
                key={item.id}
                onId={onId}
                courseId={id}
                img={item.courseImage}
                title={item.courseName}
                id={item.id}
                info={item.info}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
