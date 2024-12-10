import React from "react";
import {
  FaEnvelopeOpen,
  FaSquarePhone,
  FaLinkedin,
  FaGithub,
  FaCodepen,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import "./contact.css";
export default function Contact() {
  return (
    <section className="contact__section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be a part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me.</span>
                <h4 className="info__desc">kanwaljeet9941@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaSquarePhone className="info__icon" />
              <div>
                <span className="info__title">Call me.</span>
                <h4 className="info__desc">+919518118427</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/kanwaljeet-rathore-6b039625a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BY2hatFOWQlGhTcVKm9U%2Bug%3D%3D"
              className="contact__social-link"
              target="blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Kanwaljeet9941"
              className="contact__social-link"
              target="blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://codepen.io/Kanwaljeet9941"
              className="contact__social-link"
              target="blank"
            >
              <FaCodepen />
            </a>
            <a
              href="https://leetcode.com/u/Kanwaljeet9797/"
              className="contact__social-link"
              target="blank"
            >
              <SiLeetcode/>
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Name"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Your Email"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Subject"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message{" "}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
