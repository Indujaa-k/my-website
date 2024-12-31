import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
export const Contact = () => {
  return (
    <div className='contact' id="contact">
      <div className="contact-head">
        Contact
      </div>
      <div className="contact-section">
        <div className="contact-title">
          Let’s Work Together!
        </div>
        <div className="contact-description">
          <div>
            Looking for a <strong>Frontend Developer</strong> to bring your ideas to life?
          </div>
          <div> Love to help!
          </div>
          <div>
            I am passionate about leveraging my skills to create innovative and user-friendly digital solutions that meet organizational goals. I seek opportunities to contribute, learn, and grow while collaborating on projects that deliver exceptional results."
          </div>
        </div>
        <div className="contact-details">
          <div><IoMdMail /> <a href="mailto:indujaakalichami3366@gmail.com">indujaakalichami3366@gmail.com</a></div>
          <div><FaPhoneAlt /> 6382919860</div>
          <div><strong><FaBagShopping /> Available for remote-friendly opportunities</strong></div>
        </div>
        <div className="social-links">
          <div className="social-link">
            <a href="https://github.com/Indujaa-k" target="_blank" rel="noopener noreferrer">
              <IoLogoGithub /> GitHub
            </a>
          </div>
          <div> | </div>
          <div className="social-link">
            <a href="https://www.linkedin.com/in/indujaa-k/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
