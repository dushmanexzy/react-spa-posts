import React from 'react';
import {Burger} from "../Icons/Burger";
import {Search} from "./Search";

import './header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Burger/>

        <Search />
      </div>
    </header>
  );
}
