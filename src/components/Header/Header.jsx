import React from "react";
import { Link } from "react-router-dom";
import webjampetr from "../../images/webjampetr.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <p className="petr_text">Where's Petr?</p>
      <img src={webjampetr} alt="Webjam Petr" className="petr_logo" />
      <Link to="/game" className="page_button">
        Explore with Petr
      </Link>
      <Link to="/picture" className="page_button">
        Find Petr
      </Link>
      <Link to="/" className="page_button">
        Home
      </Link>
    </div>
  );
};

export default Header;
