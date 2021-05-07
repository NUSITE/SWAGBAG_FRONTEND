import React from "react";
import "./navbar.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const navbar = (props) => {
  
  return (
    <div className="header__component d-flex">
      <div className="header__title w-75">SWAGBAG</div>
      <div className="float-right button-group w-25">
        <Button className="action__buttons"><Link  className="button__list__link" to="/login">Login</Link></Button>
        <Button className="action__buttons"><Link  className="button__list__link" to="/register">Register</Link></Button>
        <Button className="action__buttons"><Link  className="button__list__link" to="/signout">Signout</Link></Button>
      </div>
    </div>
  );
};

export default navbar;
