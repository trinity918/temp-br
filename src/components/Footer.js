import React from 'react';
import { pageLinks } from '../data';
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.squarespace.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i className="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
