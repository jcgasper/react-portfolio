// Short personal bio/info
import React from "react";

function Aboutme() {
  return (
    <div>
      <p className="content is-medium">Full Stack Web Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/imgages/...'}/>
      <p className="content is-italic mt-4">
        personal bio
      </p>
      <p className="content">
        Personal Bio expanded
      </p>
    </div>
  );
}

export default Aboutme;