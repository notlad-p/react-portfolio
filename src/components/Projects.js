import React from "react";
import Heading from "./Heading";
import githubIcon from "../assets/icons/github-white.png";
import rentACar from "../assets/imgs/projects/rentacar.JPG";
import pairMatching from "../assets/imgs/projects/pairmatching.JPG";
import dash from "../assets/imgs/projects/dash.JPG";
import dpLogo from '../assets/imgs/projects/dp-logo.png';
import iphoneCalc from "../assets/imgs/projects/iphone-calc.JPG";
import { Link } from "phosphor-react";

const Project = ({
  name,
  description,
  tech,
  githubLink,
  projectLink,
  image,
}) => {
  return (
    <a
      className="project"
      href={githubLink}
      rel="noopener noreferrer"
      target="_blank"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div>
        <p
          className="paragraph white-text"
          style={{
            marginBottom: "16px",
          }}
        >
          {name}
        </p>
        <p className="paragraph-s grey-text">{description}</p>
      </div>
      <div className="project-footer">
        <div className="project-footer-tech">
          {tech.map((t, i) => {
            return <span key={i}>{t}</span>;
          })}
        </div>
        <div className="project-footer-icons">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <Link size="28px" color="#ffffff" />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img
              className="project-footer-github-icon"
              src={githubIcon}
              alt="github link"
            />
          </a>
        </div>
      </div>
    </a>
  );
};

const projectData = [
  {
    name: "Rent-a-Car",
    description:
      "Fictional car rental site built in React, using the Material UI component library.",
    image: rentACar,
    tech: ["React", "SASS", "Material UI"],
    githubLink: "https://github.com/notlad-p/rent-a-car",
    projectLink: "https://notlad-p.github.io/rent-a-car/",
  },
  {
    name: "Dash - New Tab Page",
    description:
      "Chrome new tab page extension with current weather, time, and 3D backgrounds.",
    image: dash,
    tech: ["VantaJS", "JSON", "JavaScript"],
    githubLink: "https://github.com/notlad-p/dash",
    projectLink: "https://dash-browser-extension.netlify.app/",
  },
  {
    name: "3D Personal Logo",
    description:
      "3D version of my personal logo, originally the header of this portfolio. Beware it is very CPU and GPU intensive.",
    image: dpLogo,
    tech: ["React", "React Three Fiber"],
    githubLink: "https://codesandbox.io/s/dp-logo-1d7cb",
    projectLink: "https://codesandbox.io/s/dp-logo-1d7cb",
  },
  {
    name: "Pair Matching Game",
    description:
      "Sea themed pair matching game using the Fisher Yates shuffle.",
    image: pairMatching,
    tech: ["JavaScript", "CSS", "HTML"],
    githubLink: "https://github.com/notlad-p/pair-matching-game",
    projectLink: "https://notlad-p.github.io/pair-matching-game/",
  },
  {
    id: 4,
    name: "iPhone Calculator Clone",
    description: "An iPhone calculator clone built in vanilla JavaScript.",
    image: iphoneCalc,
    tech: ["JavaScript", "CSS", "HTML"],
    githubLink: "https://github.com/notlad-p/iphone-calculator",
    projectLink: "https://notlad-p.github.io/iphone-calculator/",
  },
];

export default function Projects() {
  return (
    <div className="section" id="projects">
      <Heading text="Projects" color="#29C7AC" width="125px" />
      <div className="projects">
        {projectData.map((project, i) => {
          return (
            <Project
              key={i}
              name={project.name}
              description={project.description}
              image={project.image}
              tech={project.tech}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
}
