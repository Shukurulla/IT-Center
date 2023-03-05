import React from "react";
import CourseCard from "../../course-card/CourseCard";
import "./popular-course.css";
import data from "../../CourseData";

const PopularCourse = () => {
  return (
    <section id="courses">
      <h1 className="section-title">Our Popular Courses</h1>
      <div className="container">
        <div className="course__row">
          <CourseCard
            img={data[0].courseImage}
            title={data[0].courseName}
            id={data[0].id}
            info={data[0].info}
          />
          <CourseCard
            img={data[1].courseImage}
            title={data[1].courseName}
            id={data[1].id}
            info={data[1].info}
          />
          <CourseCard
            img={data[2].courseImage}
            title={data[2].courseName}
            id={data[2].id}
            info={data[2].info}
          />
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;
