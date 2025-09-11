import React from 'react';
import './Header.css'; // Assume a separate CSS file for styles

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img 
          src="/images/logo.jpg" // Updated logo path
          alt="CryptoPapa Logo"
          className="logo"
        />
      </div>
      <div className="header-center">
        <button className="nav-button active">
          <div className="menu-icon"></div>
          <span>Каталог</span>
        </button>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Знайдіть товар" 
            className="search-input"
          />
          <div className="search-icon"></div>
        </div>
      </div>
      <div className="header-right">
        <img src="/icons/heart.jpg" alt="Favorites" className="icon" />
        <img src="/icons/telegram.jpg" alt="Telegram" className="icon" />
        <img src="/icons/phone.jpg" alt="Phone" className="icon" />
        <div className="language-selector">
          UA <span className="dropdown-arrow">▼</span>
        </div>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li><a href="#home">Головна</a></li>
          <li><a href="#about">Оголошення</a></li>
          <li><a href="#catalog">Каталог</a></li>
          <li><a href="#news">Свіжі оголошення</a></li>
          <li><a href="#services">По компаніям</a></li>
          <li><a href="#profile">Профіль</a></li>
          <li><a href="#contacts">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;