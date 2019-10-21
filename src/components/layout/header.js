import { Link } from "gatsby"
import React from "react"

import Logo from "../../images/logo"

// Navbar that display in layout.js
export default () => (
  <nav className={"navbar is-fixed-top"}>
    <div className={"navbar-brand"}>
      <Link to="/" className={"navbar-item"}>
        <Logo id="Logo" />
      </Link>
    </div>
  </nav>
)
