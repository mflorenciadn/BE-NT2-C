import * as React from "react";
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
}) => (
  <div className="Card">
    {image && <img height="250" src={image} alt="product" />}
    <div className="Card-Content">
      <h4>{title}</h4>
      <h6>{subtitle}</h6>
      <p>$ {text}</p>
    </div>
    {buttonOnClick && (
      <Button onClick={buttonOnClick} disabled={buttonDisabled}>
        {buttonLabel}
      </Button>
    )}
  </div>
);

export default Card;
