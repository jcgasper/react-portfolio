// Short personal bio/info
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Web Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/images/jacob-pic.jpg'}/>
      <p className="content is-italic mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </p>
      <p className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </p>
    </div>
  );
}

export default About;