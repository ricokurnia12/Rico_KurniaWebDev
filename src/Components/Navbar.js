import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <i
          className="bi bi-youtube me-2 ms-5"
          style={{ fontSize: '52px', color: 'red' }}
        ></i>
        <Link className="navbar-brand" to="#">
          AnimeTV
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li>
              <form className="d-flex ms-5">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Movie"
                  aria-label="Search"
                  style={{ width: '50vw' }}
                />
              </form>
            </li>
            <li className="nav-item ms-5">
              <Link className="nav-link" aria-current="page" to="#">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
