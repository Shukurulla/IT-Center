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

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Categorie />
              <PopularCourse />
              <FaqContent />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
