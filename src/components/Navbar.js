import React from 'react';
import { pageLinks, socialLinks } from '../data';
import logo from '../images/logo.svg';

import '@fortawesome/fontawesome-free/css/all.min.css';
<button class="theme-toggle" id="theme-toggle">Dark Mode</button>

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={link.url} className="nav-link">{link.text}</a>
                    </li>
                );
            })}
        </ul>
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            const {id,href,icon}=link
            return (
            <li key={id}>
                <a href={href} target="_blank" rel="noopener" className="nav-icon">
                    <i className={icon}></i>
                </a>
            </li>);
          })}
        </ul>

        <button className="theme-toggle" id="theme-toggle" onClick={() => {
          document.body.classList.toggle("dark-mode");
          const themeToggleBtn = document.getElementById("theme-toggle");

          if (document.body.classList.contains("dark-mode")) {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
          } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
          }
        }}>
          <i class="fas fa-sun"></i> 
        </button>
      </div>
    </nav>
  )
}

export default Navbar