import React from "react";
import Project from "./Project";

//complete with project info
const projects = [
  {
    id: 0,
    title: "Test1",
    languages: "Test, 2, 3, 4",
    image: "",
    description: " ",
    repo: "www.github.com",
    live: "www.github.com"
  },
  {
    id: 1,
    title: "Test2",
    languages: "html, handlebars, js",
    image: "",
    description: "",
    repo: "www.github.com",
    live: "www.github.com",
  },
  {
    id: 2,
    title: "Test 3",
    languages: "html, css, js, handlebars",
    image: "/",
    description: "",
    live: "www.github.com",
    repo: "www.github.com",
  },
  {
    id: 3,
    title: "Test 4",
    languages: "html, css, js",
    image: "",
    description: "",
    repo: "www.github.com",
    live: "www.github.com",
  },
  {
    id: 4,
    title: "Test 5",
    languages: "html, css, js",
    image: "",
    description: "",
    repo: "www.github.com",
    live: "www.github.com",
  },
  {
    id: 5,
    title: "Test6",
    languages: "html, css",
    image: "",
    description: "",
    repo: "www.github.com",
    live: "www.github.com",
  },
  {
    id: 6,
    title: "Test7",
    languages: "html, css, js",
    image: "",
    description: "",
    repo: "www.github.com",
    live: "www.github.com",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;