import React from 'react';
import {Form} from "react-bootstrap";
import {SearchIcon} from "../Icons/SearchIcon";

export function Search() {
  return (
    <div className={`search-container`}>
      <Form.Control
        as={'input'}
        className={`search`}
        aria-label={`search`}
        placeholder={`Search by post title`}
      />
      <SearchIcon />
    </div>
);
}
