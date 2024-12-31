import React from 'react';
import { DiHtml5, DiCss3, DiSass, DiJsBadge, DiReact } from 'react-icons/di'; // Importing React Icons

const Name = () => {
  return (
    <>
      <div className='name'>
        <div className="name-text">
          Indujaa
        </div>
        <div className="name-role">
          Frontend Developer
        </div>
        
        {/* Animated Icons for HTML, CSS, Sass, JS, React */}
        <div className="name-icons">
          <DiHtml5 className="icon html" /> {/* HTML Icon */}
          <DiCss3 className="icon css" />  {/* CSS Icon */}
          <DiSass className="icon sass" />   {/* Sass Icon */}
          <DiJsBadge className="icon js" /> {/* JavaScript Icon */}
          <DiReact className="icon react" />  {/* React Icon */}
        </div>
      </div>

      <div className="intro">
        <div className="intro-1">
          Hi! I’m Indujaa K, a dedicated Frontend developer. I specialize in crafting responsive, and dynamic web applications that provide seamless and engaging user experiences, with a strong passion for problem-solving.
        </div>
        <div className="intro-2">
          I am committed to continuously expanding my technical expertise to create scalable, high-quality solutions that meet the evolving needs of the digital landscape.
        </div>
      </div>
    </>
  );
};

export default Name;
