import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Footer from "../footer/Footer";
import "./course-about.css";
import data from "../CourseData";

const CourseAbout = ({ courseProps }) => {
  const [modal, setModal] = useState(false);

  const onModal = () => {
    setModal(!modal);
  };

  const {
    courseImage,
    courseName,
    mentor,
    technology,
    courseInfo,
    price,
    duration,
    sertificat,
  } = courseProps;
  return (
    <section id="course__about">
      <div className="container">
        <div className="course-about__row">
          <div className="row__left">
            <div className="course-about__header">
              <div className="course__navigation">
                <p onClick={onModal}>
                  {courseName} <i className="bi bi-chevron-down"></i>
                </p>
                <ul className={`${modal ? "active" : null}`}>
                  {data.map((item) => {
                    return (
                      <Link
                        to={`/courses${item.id}`}
                        key={item.key}
                        onClick={onModal}
                      >
                        <i className={item.courseIcon}></i> {item.courseName}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="course__left-about">
              <div className="course-name">{courseProps.courseName}</div>
              <div className="course-about__title">
                <h1>{courseName}</h1>
                <p>{courseInfo}</p>
              </div>
              <div className="course__info-box">
                <h2>
                  <span>O'qituvchi:</span>
                  <span>{mentor}</span>
                </h2>
                <ul>
                  <li>
                    <span className="info-word">
                      <i className="bi bi-journal-bookmark-fill"></i>Darslar
                    </span>
                    <span>Offline</span>
                  </li>
                  <li>
                    <span className="info-word">
                      <i className="bi bi-alarm"></i>Davomiyligi
                    </span>
                    <span>{duration}</span>
                  </li>
                  <li>
                    <span className="info-word">
                      <i className="bi bi-award"></i> Sertifikat
                    </span>
                    <span>Mavjud</span>
                  </li>
                  <li>
                    <span className="info-word">
                      <i className="bi bi-currency-dollar"></i> Kurs narxi
                    </span>
                    <span>{price}</span>
                  </li>
                  <li>
                    <span className="info-word">
                      <i className="bi bi-code-slash"></i> Texnologiyalar
                    </span>
                    <span className="tech">{technology}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="course__row-right">
            <div className="row-right-img">
              <img src={courseImage} alt="" />
            </div>
            <Link to={"/contact"}>
              <Button title={"Kursga Yozilish"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseAbout;
