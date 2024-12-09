import React from "react";
import {
  FaEnvelopeOpen,
  FaSquarePhone,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa6";
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
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaXTwitter />
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https://dribble.com" className="contact__social-link">
              <FaDribbble />
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
