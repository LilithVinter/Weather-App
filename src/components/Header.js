import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        <img className="logo" src="./image/logo.png" />
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-input"
            id="search-input"
          />
          <input type="submit" value="Search 🔎" className="search-button" />
        </form>
      </header>
    </div>
  );
}
