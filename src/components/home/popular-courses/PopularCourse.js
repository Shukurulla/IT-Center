import React from "react";
import CourseCard from "../../course-card/CourseCard";
import "./popular-course.css";
const courseData = [
  {
    id: "kotlin",
    img: "https://miro.medium.com/max/1400/1*tZBSUBNpKHREIasM9zOgcQ.png",
    title: "Android Dasturlash",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
  {
    id: "ks",
    img: "https://i0.wp.com/nydabd.com/wp-content/uploads/2018/11/Office-application.png?fit=600%2C338&ssl=1",
    title: "Kompyuter Savodxonligi",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
  {
    id: "forntend",
    img: "https://www.pskitservices.com/wp-content/uploads/2019/08/html-css-javascrit.jpg",
    title: "Android Dasturlash",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
];

const PopularCourse = () => {
  return (
    <section id="courses">
      <h1 className="section-title">Our Popular Courses</h1>
      <div className="container">
        <div className="course__row">
          {courseData.map((item) => {
            return (
              <CourseCard
                img={item.img}
                title={item.title}
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

export default PopularCourse;
