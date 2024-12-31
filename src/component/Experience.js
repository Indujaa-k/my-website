import React from 'react';
import resumePDF from '../asserts/resume.pdf';



const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="experience-sec-1">
          <div className="experience-sec-1-head">
            Experience
          </div>
        </div>
        <div className="experience-sec-2">
          <div className="experience-item">
            <h3>Internship</h3>
            <p><strong>Company:</strong>KNOCK DIGITAL
              Development </p>
            <p><strong>Position:</strong> Web Developer</p>
            <p><strong>Start Date:</strong> October 2024 - Present</p>
            <p><strong>Description:</strong> Working as a web developer at KNOCK DIGITAL
              Development , focusing on  Enhancing front-end skills using HTML, CSS, JavaScript, and React.js in real-world projects.</p>
          </div>
          <div className="experience-item">
            <h3>Self-Learning</h3>
            <p><strong>Duration:</strong> 2 months</p>
            <p><strong>Description:</strong> Self-learning Html,Css,Java Script through various online resources and projects. Focused on improving skills in Web development.</p>
            <div className="resume-section">
              <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                <button>View My Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Experience