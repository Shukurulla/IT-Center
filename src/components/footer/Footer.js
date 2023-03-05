import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navItem = [
    {
      id: "/",
      title: "Bosh Sahifa",
    },
    {
      id: "about",
      title: "Biz Haqimizda",
    },
    {
      id: "courses",
      title: "Kurslar",
    },
    {
      id: "contact",
      title: "Kontact",
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="title">
            <h2>IT Center</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="footer__navigation">
            <h2>Permalinks</h2>
            <ul>
              {navItem.map((item) => (
                <li key={item.id}>
                  <Link key={item.id} to={item.id}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
        </div>

        <div className="company">
          <p>Copywrite.IT Center Mentors Group 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
