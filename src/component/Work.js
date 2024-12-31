import React from 'react';
import work1bg from '../asserts/img/work-1-bg.avif'
import work2bg from '../asserts/img/work-2-bg.avif'
import work3bg from '../asserts/img/work-3-bg.avif'
import craveempty from '../asserts/img/craveempty.png'
import craveorderpage from '../asserts/img/craveorderpage.png';
import craveproductpage from '../asserts/img/craveproductpage.png';
import cravehomepage from '../asserts/img/cravehomepage.png'
import amazoncartpage from '../asserts/img/amazon-cartpage.png';
import amazonhomepage from '../asserts/img/amazon-homepage.png';
import amazonquantity from '../asserts/img/amazon-quantity.png';
import weather from '../asserts/img/weather.png';
import sun from '../asserts/img/sun.png';
import rain from '../asserts/img/rain.png';
import cloud from '../asserts/img/cloud.png'
import cloudsun from '../asserts/img/cloudsun.png';
import thunder from '../asserts/img/thunder.png'

const Work = () => {

  return (
    <>
      <div className="work" id="work">
        <div className="work-head">
          Work
        </div>
      </div>

      <div className="work-1">
        <img src={work1bg} className="work-1-bg">
        </img>
        <div className="work-1-text">
          <div className='work-1-text-1'>
            Cravecart
            <span> E-commerce app</span>
          </div>
          <div className='work-1-text-2'>
            E-commerce platform designed to enhance online shopping with a modern, user-friendly interface.
          </div>
          <div>Developed with HTML, Sass, JavaScript, React</div>
          <div className="work-1-text-3">
            <a href=" https://indujaa-k.github.io/FoodCart-App/" target='_blank'>
              <button>View Project</button>
            </a>
          </div>
        </div>
        <div className="work-1-img">
          <div className="work-1-img-1">
            <img src={cravehomepage} alt="cravecart"></img>
          </div>
          <div className="work-1-img-2">
            <img src={craveproductpage} alt="cravecart"></img>
          </div>
          <div className="work-1-img-3">
            <img src={craveorderpage} alt="cravecart"></img>
          </div>
          <div className="work-1-img-4">
            <img src={craveempty} alt="cravecart"></img>
          </div>
        </div>
      </div>

      <div className="work-2">
      <img src={work2bg} className="work-2-bg">
      </img>
        <div className="work-2-text">
        <div className='work-2-text-1'>
            Amazon
            <span> E-commerce app</span>
          </div>
          <div className='work-2-text-2'>
            It designed to replicate the core functionality of Amazon. It allows users to browse products, add items to their cart, and complete the checkout process.
          </div>
          <div>Developed with HTML, CSS, JavaScript</div>
          <div className="work-2-text-3">
          <a href=" https://indujaa-k.github.io/Amazonproject/" target='_blank'>
              <button>View Project</button>
            </a>
          </div>
        </div>
        <div className="work-2-img">
        <div className="work-2-img-1">
            <img src={amazonhomepage} alt="amazon"></img>
          </div>
          <div className="work-2-img-2">
            <img src={amazoncartpage} alt="amazon"></img>
          </div>
          <div className="work-2-img-3">
            <img src={amazonquantity} alt="amazon"></img>
          </div>
        </div>
      </div>


      <div className="work-3">
        <img src={work3bg} className="work-3-bg">
        </img>
        <div className="work-3-text">
          <div className='work-3-text-1'>
            Weather-app {` `}
            <span> Built using OpenWeather API</span>
          </div>
          <div className='work-3-text-2'>
          The Weather API project is a web application designed to fetch and display real-time weather information for any city. It leverages an external weather API to provide users with current weather data, including temperature, humidity, wind speed, and more.
          </div>
          <div>Developed with HTML, CSS, JavaScript, React</div>
          <div className="work-3-text-3">
          <a href="https://indujaa-k.github.io/weather-app/" target='_blank'>
              <button>View Project</button>
            </a>
          </div>
        </div>
        <div className="work-3-img">
        <div className="work-3-img-4">
            <img src={cloud} alt="cravecart"></img>
          </div>
          <div className="work-3-img-5">
            <img src={cloudsun} alt="cravecart"></img>
          </div>
          <div className="work-3-img-1">
            <img src={weather} alt="cravecart"></img>
          </div>
          <div className="work-3-img-2">
            <img src={sun} alt="cravecart"></img>
          </div>
          <div className="work-3-img-6">
            <img src={thunder} alt="cravecart"></img>
          </div>
          <div className="work-3-img-3">
            <img src={rain} alt="cravecart"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work