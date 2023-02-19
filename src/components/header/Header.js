import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const navItem = ["Bosh Sahifa", "Biz Haqimizda", "Kurslar", "Kontakt"];
  const [active, setActive] = useState("Bosh Sahifa");
  const [modal, setModal] = useState(false);
  const paths = ["/", "about", "courses", "contact"];

  const onActive = (itemClass) => {
    setActive(itemClass);
  };

  const onMenu = () => {
    setModal(!modal);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img
            src="https://pc.uz/storage/publications/October2020/q.png"
            alt=""
          />
        </div>
        <i className="bi bi-list" onClick={onMenu}></i>
        <div className={`navigation ${modal ? "active" : null}`}>
          <ul>
            <i className="bi bi-x-lg" onClick={onMenu}></i>
            {navItem.map((item, id) => {
              return (
                <li onClick={onMenu} key={item}>
                  <Link
                    to={paths[id]}
                    onClick={() => onActive(item)}
                    className={`montserrat ${active == item ? "active" : null}`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
