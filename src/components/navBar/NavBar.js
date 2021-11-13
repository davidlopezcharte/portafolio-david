import React from 'react';
import './NavBar.css';

const NavBar = ({ isScrolling }) => {
  const menuItems = [
    {
      name: 'About',
      url: '#about',
      className: 'nav-link',
      id: 1,
    },
    {
      name: 'Proyets',
      url: '#proyets',
      className: 'nav-link',
      id: 2,
    },
  ];

  return (
    <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
      <div className="navbar-logo">
        <a href="#cover">
          <i className="fab fa-dyalog"></i>
        </a>
        <ul className="navbar-link">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.url} className={item.className}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
