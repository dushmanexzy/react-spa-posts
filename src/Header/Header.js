import React from 'react';
import {Burger} from "../Icons/Burger";

import './header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Burger/>
        <input type="search" className="search"/>
      </div>
    </header>
  );
}
