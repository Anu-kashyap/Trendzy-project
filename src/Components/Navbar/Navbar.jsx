import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { CiSearch, CiUser } from "react-icons/ci";
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearchbar = () => setShowSearch(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='container'>
      <Link to="/"><p className='logo'>TRENDZY</p></Link>

      <button className='icon menu-toggle' onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/"><li>Home</li></Link>
        <Link to="#"><li>Collection</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="#"><li>Contact</li></Link>

        <div className="icons-mobile">
          {!showSearch && (
            <button className='icon' onClick={toggleSearchbar}>
              <CiSearch />
            </button>
          )}
          <button className='icon'><Link to="/login"><CiUser /></Link></button>
          <button className='icon'><AiOutlineShopping /></button>
        </div>
      </div>

      {showSearch && (
        <div className='Searchbar'>
          <input type="text" placeholder='Search Here...' />
          <button><CiSearch className='btn' /></button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
