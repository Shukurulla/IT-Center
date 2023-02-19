import React from "react";
import CourseCard from "../course-card/CourseCard";
import Footer from "../footer/Footer";

import "./course.css";
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
  {
    id: "itmath",
    img: "https://storage.kun.uz/source/4/-Ky--bEa249lIxAuzDEPPmwwWO01trJG.jpg",
    title: "IT Matematika",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
  {
    id: "python",
    img: "https://1.bp.blogspot.com/-iz4h8usN6dQ/Xg3J_I6QxHI/AAAAAAAAEPE/itErMf_VcVI-fY0-vqPiPabtKkebJZLBgCNcBGAsYHQ/s1600/AdvancePython.jpg",
    title: "Python",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
  {
    id: "grapthicdesign",
    img: "https://i.ytimg.com/vi/mQSKseBlA4c/maxresdefault.jpg",
    title: "Grafik Dizayn",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio repellendus libero. Illo, autem",
  },
];

const Courses = () => {
  return (
    <section id="course">
      <div className="container">
        <h1 className="section-title">Our Popular Courses</h1>
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
      <Footer />
    </section>
  );
};

export default Courses;
