import React from "react";
import Info from "../../Components/info";
import Stats from "../../Components/stats";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Kamal_Resume.pdf";
import Skills from "../../Components/skills";
import { resume } from "../../data";
import ResumeItem from "../../Components/resumeItems";
import "./about.css";
export default function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">
              Download Cv
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="seperator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="seperator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience & Education
        </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              return (
                val.category === "experience" && (
                  <ResumeItem key={val.id} {...val} />
                )
              );
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              return (
                val.category === "education" && (
                  <ResumeItem key={val.id} {...val} />
                )
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
