import React from "react";
import "./navbar.css";
import { Button } from "semantic-ui-react";

const navbar = () => {
  return (
    <div className="header__component d-flex">
      <div className="header__title w-75">SWAGBAG</div>
      <div className="float-right button-group w-25">
        <Button className="action__buttons">Login</Button>
        <Button className="action__buttons">Register</Button>
        <Button className="action__buttons">Signout</Button>
      </div>
    </div>
  );
};

export default navbar;
