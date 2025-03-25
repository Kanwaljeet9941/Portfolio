import React, { useState } from "react";
import Close from "../assets/close.svg";

export default function PortfolioItem({ img, title, details }) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <div className="portfolio__item">
      <img src={img} alt={title} className="portfolio__img" />
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>
      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt="close"
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="modal__icon">{icon}</span>
                    <div>
                      <a className="item__title" href={desc}>
                        {title}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
            <img src={img} alt={title} className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
}
