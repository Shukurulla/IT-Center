import React from "react";
import { Link } from "react-router-dom";
import "../Contact.css";

const Message = ({ data }) => {
  const { msgClass, img, status, Message, link, linkMsg, setErr } = data;

  return (
    <div className="Message">
      <div className={`Message-box ${msgClass} `}>
        <div className="success__img">{img}</div>
        <div className="success__info">
          <h3>{status}</h3>
          <p> {Message} </p>
          <Link to={link} onClick={() => setErr((prev) => !prev)}>
            {linkMsg}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;
