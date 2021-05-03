import React, { useState } from "react";
import "./sidebar.css";
import { SIDE_BAR } from "../../../AppConstants";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const sidebar = () => {
  const sidebarProps = SIDE_BAR;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div className="sidebar__component">
      <ul>
        {sidebarProps.map((elem) => (
          <li className="sidebar__list__item"
            key={elem.id}
          ><Link className="sidebar__list__link" to={elem.path}>{elem.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default sidebar;
