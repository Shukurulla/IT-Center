import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import data from "../CourseData";
import "./Contact.css";
import Button from "../button/Button";

const courses = [
  "Android",
  "Kompyuter Savodxonligi",
  "Front End",
  "IT Matematika",
  "IT English",
  "Golang",
  "Python(Basic + Advanced)",
  "Grafik Dizayn",
];

const Contact = () => {
  const [course, setCourse] = useState(0);
  const [termName, setTermName] = useState("");
  const [termNumber, setTermNumber] = useState("");
  const [validate, setValidate] = useState(false);
  const [modal, setModal] = useState(false);

  const validateName = (text) => {
    if (text.search(/\d/) >= 0) {
      return true;
    } else {
      return false;
    }
  };
  const validateNumber = (text) => {
    if (text.search(/^[0-9]{0,9}$/)) {
      return true;
    } else {
      return false;
    }
  };

  const openHandler = () => {
    setModal(!modal);
  };

  const selectCourse = (id) => {
    setCourse(id);
  };

  const Modal = ({ course, id }) => {
    return <li onClick={() => selectCourse(id)}>{course}</li>;
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <h1 className="section-title">Kontakt</h1>
          <div className="contact__row">
            <div className="contact__row-left">
              <div className="contact__left-img">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483601-2912018.png"
                  alt=""
                />
              </div>
              <div className="contact__title">
                <h2>Contact Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti labore magnam perspiciatis temporibus aliquid ducimus
                  at optio expedita totam rerum!
                </p>
              </div>
              <div className="contact__footer">
                <div className="contact">
                  <h2>Biz Bilan Bog'lanish</h2>
                  <a href="tel:+998901234567">
                    <i className="bi bi-phone"></i> Telefon: +998 91 123 45 67
                  </a>
                  <a href="mailto:example@gmail.com">
                    <i className="bi bi-envelope"></i> Gmail: example@gmail.com
                  </a>
                  <a href="https://goo.gl/maps/Nv1biWyfVKdQWaAr5">
                    <i className="bi bi-geo-alt"></i> Manzil: Pochta Binosi
                  </a>
                </div>
                <div className="contact__icons">
                  <a href="#">
                    <i className="bi bi-telegram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-telegram"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-row-right">
              <form
                action="https://formcarry.com/s/7CkyfQ1oz"
                method="POST"
                accept-charset="UTF-8"
                className="contact__form"
              >
                <div className="input-form">
                  <div className="input__box">
                    {validateName(termName) ? (
                      <p className="validate__massage">
                        Iltimos ismga son kiritmang!!!
                      </p>
                    ) : null}
                    <input
                      type="text"
                      value={termName}
                      onChange={(e) => setTermName(e.target.value)}
                      placeholder="Ismingizni kiriting..."
                      name="course"
                    />
                  </div>
                  <div className="input__box">
                    {validateNumber(termNumber) ? (
                      <p className="validate__massage">
                        Iltimos raqamga harf kiritmang!!!
                      </p>
                    ) : null}
                    <input
                      type="text"
                      value={termNumber}
                      onChange={(e) => setTermNumber(e.target.value)}
                      placeholder="Telefon raqam..."
                      name="number"
                    />
                  </div>
                </div>
                <select value={course}></select>
                <div className="select__box" onClick={openHandler}>
                  <h4>{data[course].courseName}</h4>
                  <i class="bi bi-chevron-down"></i>
                  <ul className="select__course">
                    {courses.map((item, id) => {
                      return modal ? (
                        <Modal course={item} id={id} key={id} />
                      ) : null;
                    })}
                  </ul>
                </div>
                <div className="contact-info">
                  <ul>
                    <li>
                      <span className="item">Kurs:</span>
                      <span className="data">{data[course].courseName}</span>
                    </li>
                    <li>
                      <span className="item">Mentor:</span>
                      <span className="data">{data[course].mentor}</span>
                    </li>
                    <li>
                      <span className="item">Texnologiyalar:</span>
                      <span className="data">{data[course].technology}</span>
                    </li>
                    <li>
                      <span className="item">Narxi:</span>
                      <span className="data">{data[course].price}</span>
                    </li>
                    <li>
                      <span className="item">Davomiyligi:</span>
                      <span className="data">{data[course].duration}</span>
                    </li>
                  </ul>
                </div>
                <div className="contact__btn">
                  <button type="submit">
                    <Button title="Yuborish" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
