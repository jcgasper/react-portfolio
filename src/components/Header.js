import React, { useState } from 'react';
import Navigation from "./Navigation";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Aboutme from './Aboutme';

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to rendercurrent page
  const renderPage = () => {
    switch (currentPage) {
      case "Aboutme":
        return <Aboutme />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <Aboutme />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/jcgasper"
          >
            <span className="content is-large">Jacob Gasper</span>
          </a>
        </div>
      </nav>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;