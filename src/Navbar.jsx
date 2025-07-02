import { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className='navbar-logo'>Cetaphil</div>
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#" className="buy-now">Buy Now</a></li>
      </ul>
    </nav>
  );
}