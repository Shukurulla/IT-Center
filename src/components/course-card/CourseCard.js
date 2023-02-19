import React from "react";
import "./course-card.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const CourseCard = ({ id, img, title, info }) => {
  return (
    <div className="course__card-box">
      <div className="card__img">
        <img src={img} alt={id} />
      </div>
      <div className="course__title">
        <h2>{title}</h2>
        <p>{info}</p>
        <Link to={`/courses/${id}`}>
          <Button title="Batafsil" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
