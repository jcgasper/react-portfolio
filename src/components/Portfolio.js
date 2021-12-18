import React from "react";
import Project from "./Project";

//complete with project info
const projects = [
  {
    id: 0,
    title: "Budget Tracker",
    languages: "Javascript, CSS, HTML,MongoDB/Mongoose, IndexedDB",
    image: "/images/budgettracker.png",
    description: "Budget Tracker website, allows you to add/subtract expenses. Stores session data when offline, and will update when back online.",
    repo: "https://github.com/jcgasper/Budget-Tracker",
    live: "https://whispering-escarpment-14861.herokuapp.com/"
  },
  {
    id: 1,
    title: "Weather Dashboard",
    languages: "Javascript, HTML,CSS, and OpenWeather API's",
    image: "/images/weatherscreenshot.png",
    description: "User can type in city name, and is given current day weather, and a 5day forecast, using a third party API.",
    repo: "https://github.com/jcgasper/Weather-Dashboard",
    live: "https://jcgasper.github.io/Weather-Dashboard/",
  },
  {
    id: 2,
    title: "Javascript Quiz",
    languages: "Javascript, HTML, and CSS",
    image: "/images/screenshot.png",
    description: "Basic interactive Javascript quiz. Allows you to complete quiz,and view previous high scores.",
    repo: "https://github.com/jcgasper/Web-API-Code-Quiz",
    live: "https://jcgasper.github.io/Web-API-Code-Quiz/index.html",
  },
  {
    id: 4,
    title: "Password Generator",
    languages: "Javascript, HTML, and CSS",
    image: "/images/passwordgen.png",
    description: "Basic Password Generator. Generates a randomized password between 8-128 characters.",
    repo: "https://github.com/jcgasper/PasswordGenerator",
    live: "https://jcgasper.github.io/PasswordGenerator/",
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