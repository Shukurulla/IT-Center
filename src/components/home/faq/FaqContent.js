import React from "react";
import Faq from "./faq-box/faq";
import "./faq.css";

const faqData = [
  {
    question: "Lorem ipsum dolor sit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium recusandae ipsam delectus libero blanditiis ut eum at laboriosam voluptatem eius?",
  },
  {
    question: "Lorem ipsum dolor sit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium recusandae ipsam delectus libero blanditiis ut eum at laboriosam voluptatem eius?",
  },
  {
    question: "Lorem ipsum dolor sit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium recusandae ipsam delectus libero blanditiis ut eum at laboriosam voluptatem eius?",
  },
  {
    question: "Lorem ipsum dolor sit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium recusandae ipsam delectus libero blanditiis ut eum at laboriosam voluptatem eius?",
  },
  {
    question: "Lorem ipsum dolor sit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium recusandae ipsam delectus libero blanditiis ut eum at laboriosam voluptatem eius?",
  },
  {
    question: "Lorem ipsum dolor sit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium recusandae ipsam delectus libero blanditiis ut eum at laboriosam voluptatem eius?",
  },
];

const FaqContent = () => {
  return (
    <section id="faq">
      <div className="container">
        <h1 className="section-title">Frequently Asked Questions</h1>
        <div className="faq__row">
          {faqData.map((item, id) => {
            return (
              <Faq question={item.question} key={id} answer={item.answer} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqContent;
