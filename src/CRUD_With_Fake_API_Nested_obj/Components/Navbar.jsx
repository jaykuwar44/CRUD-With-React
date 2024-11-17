import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const addUserData = () => {
    navigate("/add-user");
  };
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-md bg-light">
          <div class="container-fluid d-flex align-items-center">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link">About</Link>
                </li>
              </ul>
              <button className="btn btn-success" onClick={addUserData}>
                Add New
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
