import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../../images/logo"

const Header = ({ siteTitle }) => (
  <nav className={"navbar is-fixed-top"}>
    <div className={"navbar-brand"}>
      <Link to="/" className={"navbar-item"}>
        <Logo id="Logo" />
      </Link>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
