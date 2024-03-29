import React from 'react';

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: "sticky", top: "0px" }}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a to="/about" className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#our-artists">Our Artists</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Our Shop</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;

