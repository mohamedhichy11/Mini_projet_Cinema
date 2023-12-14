
import React, { useState } from 'react';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import "./header.css";
import Search from '../components/Search';
import { Link } from 'react-router-dom';


export default function Header({ scroll }) {
  const [navList, setNavList] = useState(navListData);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavOnclick = (id) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${scroll > 100 ? "scrolled" : undefined} ${menuOpen ? "menu-open" : ""}`}>
      <Link  to="/Mini_projet_Cinema" className='logo'> 
      <ion-icon name="film-outline"></ion-icon> hichy
    </Link>
      <ul className={`nav ${menuOpen ? "menu-open" : ""}`}>
        {navList.map((nav) => (
          <NavListItem key={nav._id} nav={nav} navOnclick={handleNavOnclick} />
        ))}

        <Link to="/signin" className='btnsign'>
        sign in 
        </Link>
       
      </ul>
      <Search />
      <div className="menu-icon" onClick={handleMenuClick}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
     
    </header>
  );
}

/*
 <button className='btnsign'>
        <ion-icon name="log-in-outline"></ion-icon>
          sgin up
        </button>
*/
