import React from "react";

import {NavLink} from "react-router-dom";

import Auth from "../Common/Auth";

export default function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-wrapper">
          <ul className="nav-list">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/AdminPart">Admin Part</NavLink></li>
            <li><NavLink to="/ClientPart">Client Part</NavLink></li>
            <li><NavLink to="/Profile">Profile</NavLink></li>
          </ul>
          <Auth />
        </div>
      </div>
    </div>
  );
}