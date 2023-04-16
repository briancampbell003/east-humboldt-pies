import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <p>East Humboldt Pies</p>
      </li>
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#menu"
          onClick={() => handlePageChange('Menu')}
          className={currentPage === 'Menu' ? 'nav-link active' : 'nav-link'}
        >
          Menu
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
