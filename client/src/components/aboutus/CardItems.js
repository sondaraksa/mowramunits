import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./card.css";

const CardItem = ({ id, name, unitPos, mowramPos, imgUrl }) => {
  return (
    <div className="text-center">
      <img
        className="mycard
"
        src={process.env.PUBLIC_URL + "/img/profileImages/" + imgUrl}
        alt="berra-lim"
      />
      <div className="text-center card-body">
        <Link className="text-reset" to={"/profile/" + id}>
          <h5>{name}</h5>
        </Link>
        <p>{unitPos}</p>
        <p>{mowramPos}</p>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unitPos: PropTypes.string,
  mowramPos: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default CardItem;
