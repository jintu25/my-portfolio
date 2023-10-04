import React, { useEffect } from "react";
import about from "../../../image/portfolio.jpg";
import "./about.css";
import Aos from "aos";
import 'aos/dist/aos.css'

const About = () => {
  
  return (
    <div id="about" className="m-auto bg-[#140f25] py-6">
      <h2 className="aboutMe text-3xl lg:text-5xl font-bold text-center pb-6 mb-10 md:mb-0 about-text pt-5">
        About Me
      </h2>
      <div className="">
        <div className="max-w-screen-xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center about">
          <div className="lg:mx-0 mx-3 mr-5">
            <h1 className="lg:text-5xl text-4xl font-bold who-i-am mb-8">
              WHO I AM
            </h1>
            <p className="text-lg text-slate-100 font-semibold text-justify mb-8 mr-3">
              <strong>Hi my name is jintu paul, </strong>I am student of
              habiganj polytechnic institute. I am a front end developer. I
              always ready to take on new challenge. My childhood dreams was to
              become a web developer, then i start firstly html, css, bootstrap
              then i learn tailwind css, javascript, react, nodeJs, mongoDb,
              expressJs etc. I am confident in my ability to contribute to the
              success of any organization. I am also a quick learner with
              excellent communication and problem-solving skills, and I am
              always looking for opportunities to grow and improve as a
              developer.
            </p>
            <a
              href="https://drive.google.com/file/d/1tlzmTahPTW_Nj8Yfqfth3xLhIHv0LFDB/view?usp=sharing"
              target="_blank"
            >
              <button className=" mr-4 text-lg font-medium px-8 glow-on-hover mb-4 md:mb-0">
                Download Resume
              </button>
            </a>
            <button className="wrapper">
              <div className="link_wrapper">
                <a className="contact-button font-medium text-lg" href="#">Contact Me</a>  
              </div>
            </button>
          </div>

          <div  className="text-center  d-flex justify-center items-center">
            <img className="" src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;