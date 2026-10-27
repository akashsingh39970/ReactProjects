import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="dashboard-header  d-flex justify-content-between align-items-center">

      <div className="header-left">
        <h3>Good Morning, Akash</h3>
        <p>Here's your financial overview</p>
      </div>

      <div className="header-right d-flex align-items-center gap-2">

        <div className="header-date">
          <p>Sat, 6 Sep 2025</p>
        </div>

        <div className="profile-avatar">
          <span>A</span>
        </div>

      </div>

    </header>
  );
};

export default Header;