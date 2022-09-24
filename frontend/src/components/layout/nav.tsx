import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/style.css";
import { isLoggedIn, logout } from "../../api-utils/login-utils";
function Nav() {
  // Toggle Bulma nav
  const [isActive, setisActive] = React.useState(false);
  // Toggle Dropdown for Login/User Profile
  const [dropdown, setDropdown] = React.useState(false);
  //Set state to loggedIn
  const [loggedIn, setLoggedIn] = React.useState(
    <Link className="navbar-item" to="/login">
      Login
    </Link>
  );
  useEffect(() => {
    if (isLoggedIn()) {
      setLoggedIn(
        <div
          className={
            !dropdown
              ? "dropdown is-align-items-center"
              : "dropdown is-active is-align-items-center"
          }
        >
          <div className="dropdown-trigger">
            <a
              className="navbar-item"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              onMouseEnter={() => setDropdown((e) => !e)}
            >
              <span>Menü</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <Link className="navbar-item" to="/user">
                Dein Profil
              </Link>
              <a className="navbar-item disabled">Einstellungen</a>
              <hr className="dropdown-divider" />
              <Link className="navbar-item" to="/login" onClick={doLogout}>
                Logout
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }, [useLocation(), dropdown]);

  function doLogout() {
    setLoggedIn(
      <Link className="navbar-item" to="/login">
        Login
      </Link>
    );
    logout();
  }

  return (
   <header>
     <nav
      className="navbar is-fixed-top"
      aria-label="main-menu"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <svg
              id="batta-logo-wrap"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 164.59 65.53"
            >
              <defs></defs>
              <g id="batta-logo">
                <path
                  className="logo-fill"
                  d="M158.91,55.58c-.54-.49-.81-1.3-.81-2.44,0-.97,.11-1.88,.34-2.73l6.15-29.05h-12.3l-.94,4.53v-.6c0-1.31-.57-2.36-1.71-3.16-1.14-.8-2.88-1.2-5.21-1.2-4.62,0-8.59,1.61-11.92,4.83-3.33,3.22-5.84,7.15-7.52,11.79-1.68,4.64-2.52,9.07-2.52,13.29,0,2.01,.21,3.78,.6,5.34-.39,.08-.78,.12-1.18,.12-1.25,0-2.15-.24-2.69-.72-.54-.49-.81-1.3-.81-2.44,0-.97,.11-1.88,.34-2.73l5.47-25.63h5.12l.68-3.42h-5.13l2.91-13.5-12.65,1.71-2.56,11.78h-2.82l-.68,3.42h2.82l-5.13,24.01c-.26,1.31-.44,2.47-.55,3.5-.45,.7-.94,1.36-1.52,1.93-1.43,1.4-2.96,2.09-4.61,2.09-1.26,0-2.15-.24-2.69-.72-.54-.49-.81-1.3-.81-2.44,0-.97,.11-1.88,.34-2.73l5.47-25.63h5.12l.68-3.42h-5.13l2.91-13.5-12.65,1.71-2.56,11.78h-2.82l-.68,3.42h2.82l-5.13,24.01c-.46,2.27-.68,4.13-.68,5.55,0,.81,.05,1.56,.14,2.27-.44,.13-.9,.21-1.38,.21-2.34,0-3.5-1.22-3.5-3.68,0-.97,.11-1.88,.34-2.73l6.15-29.05h-12.3l-.94,4.53v-.6c0-1.31-.57-2.36-1.71-3.16-1.14-.8-2.88-1.2-5.21-1.2-4.62,0-8.59,1.61-11.92,4.83-2.08,2.01-3.83,4.29-5.26,6.85-.13-.23-.27-.47-.41-.69-1.65-2.54-4.19-4.12-7.6-4.74,2.74-1.54,4.84-3.53,6.32-5.98,1.48-2.45,2.22-4.99,2.22-7.61,0-2.45-.67-4.7-2.01-6.75s-3.38-3.7-6.11-4.95c-2.73-1.26-6.09-1.88-10.08-1.88-5.3,0-10.34,1.07-15.12,3.21S7.26,8.15,4.36,11.62C1.45,15.09,0,18.77,0,22.64c0,2.79,.77,4.8,2.3,6.02,1.54,1.22,3.82,1.84,6.84,1.84,0-.11-.2-.58-.6-1.41-.4-.82-.6-2.29-.6-4.4,0-4.44,1.04-8.22,3.12-11.36,2.08-3.13,4.77-5.48,8.07-7.05,3.3-1.56,6.69-2.35,10.16-2.35,3.82,0,6.65,.89,8.5,2.65,1.85,1.77,2.78,3.96,2.78,6.58,0,2.16-.57,4.31-1.71,6.45-1.14,2.14-2.65,3.91-4.53,5.3-1.88,1.4-3.9,2.09-6.06,2.09h-.51l4.02-18.97-12.64,1.71L7.52,64.08h12.3l7-32.72c1.08-.17,2.39-.26,3.93-.26,5.41,0,8.12,3.62,8.12,10.85,0,3.87-.7,7.4-2.09,10.59-1.4,3.19-3.52,4.78-6.37,4.78-1.03,0-1.98-.22-2.86-.68-.89-.45-1.84-1.25-2.86-2.39-.74,1.82-1.11,3.48-1.11,4.96,0,2.34,.84,3.97,2.52,4.91,1.68,.95,3.66,1.41,5.94,1.41,4.38,0,7.99-1.38,10.81-4.14,.91-.89,1.73-1.85,2.48-2.86,.49,1.05,1.09,1.97,1.83,2.73,2.17,2.22,4.87,3.33,8.12,3.33,2.79,0,5.2-.72,7.22-2.18,2.02-1.45,3.86-3.35,5.51-5.69,.29,2.57,1.15,4.52,2.61,5.85,1.45,1.34,3.37,2.01,5.76,2.01,3.13,0,6.25-1.1,9.35-3.29,.1-.07,.19-.16,.29-.23,.24,.34,.49,.67,.78,.96,1.68,1.71,3.89,2.57,6.62,2.57,3.25,0,6.52-1.1,9.82-3.29,1.18-.78,2.27-1.82,3.3-3.11,.41,1.56,1.09,2.85,2.06,3.83,1.68,1.71,3.89,2.57,6.62,2.57,3.25,0,6.52-1.1,9.82-3.29,.15-.1,.28-.22,.43-.32,.08,.09,.15,.19,.24,.28,2.17,2.22,4.87,3.33,8.12,3.33,5.01,0,9.25-2.65,12.73-7.95,.34,2.51,1.24,4.46,2.69,5.85,1.45,1.4,3.34,2.09,5.68,2.09,2.17,0,3.82-.64,4.96-1.93,1.14-1.28,2.33-3.51,3.59-6.7-.46,.23-1.08,.34-1.88,.34-1.25,0-2.15-.24-2.69-.72Zm-90.99-6.79c-.51,2.34-1.47,4.17-2.86,5.51-1.4,1.34-2.81,2.01-4.23,2.01-1.2,0-2.21-.4-3.03-1.2-.83-.8-1.24-2.62-1.24-5.46s.51-6.14,1.54-9.87c1.03-3.73,2.45-6.92,4.27-9.57,1.82-2.65,3.87-3.97,6.15-3.97,1.2,0,2.08,.35,2.65,1.06,.57,.72,.86,1.44,.86,2.18l-4.1,19.31Zm78.56,0c-.51,2.34-1.47,4.17-2.86,5.51-1.4,1.34-2.81,2.01-4.23,2.01-1.2,0-2.21-.4-3.03-1.2-.83-.8-1.24-2.62-1.24-5.46s.51-6.14,1.54-9.87c1.03-3.73,2.45-6.92,4.27-9.57,1.82-2.65,3.87-3.97,6.15-3.97,1.2,0,2.08,.35,2.65,1.06,.57,.72,.86,1.44,.86,2.18l-4.1,19.31Z"
                />
              </g>
            </svg>
          </Link>

          <button
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link className="navbar-item" to="/shops">
              Shops
            </Link>
            <Link className="navbar-item" to="#foo">
              Blog
            </Link>
            <Link className="navbar-item" to="#bar">
              Über uns
            </Link>
            <Link className="navbar-item" to="#bar">
              Kontakt
            </Link>
          </div>
          <div className="navbar-end">{loggedIn}</div>
        </div>
      </div>
    </nav>
   </header>
  );
}

export default Nav;
