import React, { useState } from "react";
import "../faq.css";

const Faq = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  const onActive = () => {
    setActive(!active);
  };
  return (
    <div className="faq">
      <div className="faq__question" onClick={onActive}>
        <i className={`bi bi-plus-lg ${active ? "active" : null}`}></i>
        <p>{question}</p>
      </div>
      <div className="faq__answer">{active ? <p>{answer}</p> : null}</div>
    </div>
  );
};

export default Faq;
