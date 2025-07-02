import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { CiSearch, CiUser } from "react-icons/ci";
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  }, []);

  const toggleSearchbar = () => setShowSearch(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearch = () => {
    if (searchInput.trim() !== '') {
      navigate(`/product?search=${searchInput.trim()}`);
      setSearchInput('');
      setShowSearch(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleUserClick = () => {
    if (isLoggedIn) {
      setShowLogout(prev => !prev);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setShowLogout(false);
    navigate("/login");
  };

  return (
    <nav className='container'>
      <Link to="/"><p className='logo'>TRENDZY</p></Link>

      <button className='icon menu-toggle' onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/"><li>Home</li></Link>
        <Link to="/product"><li>Collection</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>

        <div className="icon icons-mobile">
          {!showSearch && (
            <button className='icon' onClick={toggleSearchbar}>
              <CiSearch />
            </button>
          )}
          {/* 👤 User Icon */}
          <div style={{ position: 'relative' }}>
            <button className='icon' onClick={handleUserClick}>
              <CiUser />
            </button>
            {showLogout && (
              <div className="logout-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
          {/* 🛒 Cart */}
          <Link to="/cart"><button className='icon'><AiOutlineShopping /></button></Link>
        </div>
      </div>

      {showSearch && (
        <div className='Searchbar'>
          <input
            type="text"
            placeholder='Search Here...'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}><CiSearch className='btn' /></button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
