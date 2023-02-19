import Button from "../button/Button";
import "./home.css";

const Home = () => {
  return (
    <section id="home">
      <main>
        <div className="container">
          <div className="row">
            <div className="home__col-left">
              <div className="home-info">
                <h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex?
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iusto dolorem quo necessitatibus totam mollitia!
                </p>
                <Button title="Learn More" />
              </div>
            </div>
            <div className="home__col-right">
              <img
                src="https://xojelitcenter.netlify.app/image/it%20center-hero.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
