import React, { Component } from "react";
import Navs from "./navs";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isSideMenuOpen: false,
    };
  }

  render() {
    return (
      <div>
        <Navs />
      </div>
    );
  }
}

export default Header;
