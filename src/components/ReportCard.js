import React from "react";
import "./Cards.css";
import { Link, useHistory } from "react-router-dom";

function ReportCard(props) {
  return (
    <div className='card'>
      <div className='card__body'>
        <img src={props.img} class='card__image' />
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__description'>{props.description}</p>
        <p className='card__description'>{props.date}</p>
      </div>

      <button className='card__btn'>
        <Link to={props.route} style={{ color: "black" }}>
          Display report
        </Link>
      </button>
    </div>
  );
}

export default ReportCard;
