import React from 'react';
import html from '../asserts/img/html.png';
import css from '../asserts/img/css.png';
import javascript from '../asserts/img/javascript.png';
import sass from '../asserts/img/sass.png';
import react from '../asserts/img/react.png';
import git from '../asserts/img/git.png';
import bootstrap from '../asserts/img/bootstrap.jpg';
import vscode from '../asserts/img/vscode.png';

const Skills = () => {
  const skillImages = [
    { src: html, alt: 'HTML' },
    { src: css, alt: 'CSS' },
    { src: javascript, alt: 'JavaScript' },
    { src: sass, alt: 'Sass' },
    { src: react, alt: 'React' },
    { src: bootstrap, alt: 'Bootstrap' },
    { src: vscode, alt: 'VS Code' },
    { src: git, alt: 'Git' },
  ];

  return (
    <div className="skill-slider">
      <div className="skill-head">Skills</div>
      <div className="slider-wrapper">
        <div className="slider">
          {skillImages.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image.src} alt={image.alt} />
              <p>{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
