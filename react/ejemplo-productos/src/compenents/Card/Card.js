import React, { useState } from "react";
import Arrow from "../../assets/icons/down-arrow.png";
import Button from "../Button/Button";
import "./Card.css";

const Card = ({
  image,
  title,
  subtitle,
  text,
  buttonLabel,
  buttonOnClick,
  buttonDisabled,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [contact, setContact] = useState("");

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleOpenModal = () => {
    let newContact = prompt(
      "Ingrese su mail o un número telefónico de contacto para recibir más información"
    );
    setContact(newContact);
  };

  return (
    <div className="Card">
      {image && <img height="250" src={image} alt="product" />}
      <div className="Card-Content">
        <h4>{title}</h4>
        <div>
          <div className="Card-Text-Container">
            <h6
              className={
                expanded
                  ? "Card-Subtitle-Text-Expanded"
                  : "Card-Subtitle-Text-Contract"
              }
            >
              {subtitle}
            </h6>
            <button
              className={
                expanded
                  ? "Card-Subtitle-Button-Expanded"
                  : "Card-Subtitle-Button-Contract"
              }
              onClick={handleClick}
            >
              <img src={Arrow} height="15" width="15" />
            </button>
          </div>
          {expanded && (
            <button
              className="Card-Button-Open-Modal"
              onClick={handleOpenModal}
            >
              Quiero saber más
            </button>
          )}
        </div>
        <p>$ {text}</p>
        {buttonOnClick && (
          <Button onClick={buttonOnClick} disabled={buttonDisabled}>
            {buttonLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
