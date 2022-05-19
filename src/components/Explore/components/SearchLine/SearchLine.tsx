import React from 'react';
import './SearchLine.scss';

export const SearchLine = () => {
  return (
    <div className="searchLine">
      <div className="searchLine__body">
        <input className="searchLine__line"></input>
        <button className="searchLine__button button">Search</button>
      </div>
    </div>
  );
};
