import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="link-container">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/tools">Tools</Link>
      <Link className="link" to="/bazaar">Bazaar</Link>
      <Link className="link" to="/knowledge-center">Knowledge Center</Link>
  </div>
);

export default Header;
