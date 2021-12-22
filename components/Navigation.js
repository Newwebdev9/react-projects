import React from 'react';
import '../src/style.css';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <div className="nav">
      <Link className="Link" to="/about">
        About
      </Link>
      <Link className="Link" to="/contact">
        Contact
      </Link>
    </div>
  );
}
export default Navigation;
