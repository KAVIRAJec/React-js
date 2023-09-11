// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <nav>
        <ul className='nav'>
          <li className='li'>
            <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li className='li'>
            <Link to="/about" className='nav-link'>About</Link>
          </li>
          <li className='li'>
            <Link to="/help" className='nav-link'>Help</Link>
          </li>
          <li className='li'>
            <Link to="/contact" className='nav-link'>Contact</Link>
          </li>
          <li className='li'>
            <Link to="/profile" className='nav-right'>
              My Profile
            </Link>
            </li> 
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
