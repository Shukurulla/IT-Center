import React from "react";
import "./about.css";
import Team from "./team/Team";

const cardData = [
  {
    id: 1,
    icon: "bi-camera-video",
    value: "450+",
    title: "Courses",
  },
  {
    id: 2,
    icon: "bi-people",
    value: "79,00+",
    title: "Students",
  },
  {
    id: 3,
    icon: "bi-award",
    value: "26",
    title: "Awards",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__row">
          <div className="col-left">
            <img
              src="https://xojelitcenter.netlify.app/image/about-img.png"
              alt=""
            />
          </div>
          <div className="col-right">
            <h1>Achievements</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              officia ab eius sit nulla mollitia illo, nisi debitis corrupti
              molestias.
            </p>
            <div className="right__row">
              {cardData.map((item) => {
                return (
                  <Card
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Team />
    </section>
  );
};

const Card = ({ icon, value, title }) => {
  return (
    <div className={`card__achievement ${icon}`}>
      <div className="card__img">
        <i className={`bi ${icon}`}></i>
      </div>
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
};

export default About;
