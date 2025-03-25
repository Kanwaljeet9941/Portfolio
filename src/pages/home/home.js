import React from "react";
import Profile from "../../assets/kamal-home-1.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

export default function Home() {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Kanwaljeet. </span>Full Stack Developer
          </h1>
          <p className="home__description">
            I am a MERN based web developer focusing on crafting clean &
            user-friendly experiences, I am passionate about building excellent
            software that improves the live of those around me.
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}
