import React from "react";

import logo from "../assets/shared/avatar.png";

const Logo = () => {
  return (
    <span className="logo">
      <img src={logo} alt="Logo" />
      LaunchTime
    </span>
  );
};

export default Logo;
