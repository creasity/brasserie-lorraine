import React from 'react';
import PropTypes from 'prop-types';

import { disableScroll, enableScroll } from '../../utils/functions/disableScroll';

const Navbar = ({ menuOpen, setMenuOpen }) => (
  <div className="fixed-top">
    <div className="fixed-top-app">
      <div className="navbar-logo-container">
        <img className="navbar-logo" src="/assets/logo.png" alt="logo" />
      </div>
      <div
        onClick={() => {
          if (menuOpen) {
            enableScroll();
          }
          else {
            disableScroll();
          }
          setMenuOpen(!menuOpen);
        }}
        className={menuOpen ? 'navbar-btn open' : 'navbar-btn'}
      >
        <div className="navbar-btn__burger" />
      </div>
    </div>
  </div>
);

Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Navbar;
