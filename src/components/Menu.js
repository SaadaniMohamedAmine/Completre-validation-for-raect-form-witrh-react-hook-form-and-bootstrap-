import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import AuthContext from "../hooks/authContext";

const Menu = () => {
  const authContext = useContext(AuthContext);
  const status = authContext.status;
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My Store
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <img src="/menu1.png" alt="menu" width="30" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>

            <Link
              className="nav-link active"
              aria-current="page"
              to="/products"
            >
              Products
            </Link>
            <Link className="nav-link active" aria-current="page" to="/about">
              About
            </Link>
            {status ? (
              <React.Fragment>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/profile"
                >
                  Profile
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/profile"
                >
                  Logout
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
                {/* <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/register"
                >
                  Register
                </Link> */}
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
