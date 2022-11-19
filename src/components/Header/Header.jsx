import React from "react";
import { Link } from "react-router-dom";
import webjampetr from "../../images/webjampetr.png";
import NotPageButtons from "../NotPageButtons";

import "./Header.css";
import PageButtons from "../PageButtons";

const Header = () => {
  return (
    <div className="header">
      <div className="home-logo">
        <Link to="/">
          <img src={webjampetr} alt="Webjam Petr" className="petr_logo" />
        </Link>
        <Link to="/" className="petr_text">
          Where's Petr?
        </Link>
      </div>
      <div className="home-buttons">
        <NotPageButtons text="Explore UCI Map" page="https://map.uci.edu/?id=463#!ct/61979?s/" />
        <NotPageButtons text=" GitHub Repository" page="https://github.com/maithyy/Wheres-Petr" />
      </div>
    </div>
  );
};

export default Header;
