import React from "react";
import { Link } from "react-router-dom";

export function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/Home" className="navbar-brand">

      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {props.session ? (
            <>
              <li className="nav-item">
                <Link
                  to="/Home"
                  className={
                    window.location.pathname === "/Home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <div className="NavLinks">Home</div>
                </Link>
              </li>
    
              <li className="nav-item">
                <Link
                  to="/About"
                  className={
                    window.location.pathname === "/About"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <div className="NavLinks">About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/LogIn"
                  className={
                    window.location.pathname === "/LogOut"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={() => {
                    // logOut();
                  }}
                >
                  <div className="NavLinks">Log Out</div>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link
                  to="/About"
                  className={
                    window.location.pathname === "/About"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <div className="NavLinks">About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/LogIn"
                  className={
                    window.location.pathname === "/LogIn"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <div className="NavLinks">Log In</div>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}