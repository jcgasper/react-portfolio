//footer include general info and links to github/linkedin
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          
          <a
            href="https://www.github.com/jcgasper"
            target="_blank" rel="noreferrer"
          >
            Github
          </a>{" "}
          |{" "}{" "}
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;