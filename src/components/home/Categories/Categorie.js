import React from "react";
import Button from "../../button/Button";
import Card from "./cards/Card";
import "./category.css";

const cards = [
  {
    img: "https://pbs.twimg.com/media/FjMnGkNXEAAyvSU?format=jpg&name=4096x4096",
    title: "Blockchain",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia.",
  },
  {
    img: "https://pbs.twimg.com/media/FjMnGkNXEAAyvSU?format=jpg&name=4096x4096",
    title: "Blockchain",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia.",
  },
  {
    img: "https://pbs.twimg.com/media/FjMnGkNXEAAyvSU?format=jpg&name=4096x4096",
    title: "Blockchain",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia.",
  },
  {
    img: "https://pbs.twimg.com/media/FjMnGkNXEAAyvSU?format=jpg&name=4096x4096",
    title: "Blockchain",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia.",
  },
  {
    img: "https://pbs.twimg.com/media/FjMnGkNXEAAyvSU?format=jpg&name=4096x4096",
    title: "Blockchain",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia.",
  },
  {
    img: "https://pbs.twimg.com/media/FjMnGkNXEAAyvSU?format=jpg&name=4096x4096",
    title: "Blockchain",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia.",
  },
];

const Categorie = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category__row">
          <div className="category__title">
            <h1>Categories</h1>
            <p className="montserrat">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus doloremque dolores magni! Repellat, laboriosam quae?
            </p>
            <Button title="Learn More" />
          </div>
          <div className="category__cards">
            {cards.map((item, id) => {
              return (
                <Card
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorie;
