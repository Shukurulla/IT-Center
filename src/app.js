import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Categorie from "./components/home/Categories/Categorie";
import FaqContent from "./components/home/faq/FaqContent";
import Home from "./components/home/Home";
import PopularCourse from "./components/home/popular-courses/PopularCourse";
import Contact from "./components/contact/Contact";
import CourseAbout from "./components/course-about/CourseAbout";
import data from "./components/CourseData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header active={0} />
              <Home />
              <Categorie />
              <PopularCourse />
              <FaqContent />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header active={1} />
              <About />
            </>
          }
        />
        <Route
          path="/courses"
          element={
            <>
              <Header active={2} />
              <Courses />
            </>
          }
        />
        <Route
          path={`contact/`}
          element={
            <>
              <Header active={3} />
              <Contact courseProps={data[0]} />
            </>
          }
        />
        {data.map((item, id) => {
          return (
            <>
              <Route
                key={id}
                path={`contact${item.id}`}
                element={
                  <>
                    <Header active={4} />
                    <Contact courseProps={data[id + 1]} />
                  </>
                }
              />
              <Route
                key={id}
                path={`courses${item.id}`}
                element={
                  <>
                    <Header active={2} />
                    <CourseAbout courseProps={data[id]} />
                  </>
                }
              />
            </>
          );
        })}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
