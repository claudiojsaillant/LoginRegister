import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../Utilities/sessionManger";
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
                  className="nav-link active"
                >
                  <div className="NavLinks">Home</div>
                </Link>
              </li>
    
              <li className="nav-item">
                <Link
                  to="/About"
                  className="nav-link active"
                >
                  <div className="NavLinks">About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/LogIn"
                  className="nav-link active"
                  onClick={() => {
                    logOut();
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
                  to="/Home"
                  className="nav-link active"
                >
                  <div className="NavLinks">Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  className="nav-link active"
                >
                  <div className="NavLinks">About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/SignUp"
                  className="nav-link active"
                >
                  <div className="NavLinks">Sign Up</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/LogIn"
                  className="nav-link active"
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