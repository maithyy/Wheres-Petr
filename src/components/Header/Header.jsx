import React from "react";
import { Link } from "react-router-dom";
import webjampetr from "../../images/webjampetr.png";

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
        <PageButtons text="ㅤㅤㅤFind Petr!ㅤㅤㅤ" page="/picture" />
        <PageButtons text="Explore with Petr!" page="/game" />
      </div>
    </div>
  );
};

export default Header;
