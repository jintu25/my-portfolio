import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";
import myImg from "../../../image/dev.png";
// import { motion } from "framer-motion";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Banner = () => {
  const handleType = (count) => {};
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-screen-xl m-auto py-20">
      <div>
        <h2 className="text-xl lg:text-2xl  font-semibold text-cyan-400 mb-3">Hello! I AM</h2>
        <h1 className="myName text-5xl lg:text-8xl  font-bold mb-5">Jintu Paul</h1>
        <h1 className="lg:text-4xl lg:text-slate-100 text-3xl text-orange-500 font-semibold mb-4">I am A {""}
        <span className=" text-cyan-400 font-semibold lg:text-4xl text-3xl">
                 <Typewriter
                  words={[
                    "Mern Stack Developer",
                    "Front End Developer",
                    "Javascript Developer",
                    "React Developer",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
        </h1>
        <div className="social-icons">
        <ul className="icon-list flex items-center">
                <span className="text-white flex items-center text-2xl hireMe font-medium">
                  Hire Me:{" "}
                  <AiOutlineArrowRight className="mt-1 hireMe-arrowIcon" />
                </span>
                <li className="icon-item">
                  <a
                    href="https://www.linkedin.com/in/jintu45/"
                    className="icon-link"
                    target="blank"
                  >
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </a>
                </li>
                <li className="icon-item">
                  <a
                    href="https://web.facebook.com/jintu.paul.16"
                    className="icon-link"
                    target="blank"
                  >
                    <i>
                      <BsFacebook />
                    </i>
                  </a>
                </li>
                <li className="icon-item">
                  <a
                    href="https://www.instagram.com/jintu.ankur/"
                    className="icon-link"
                    target="blank"
                  >
                    <i>
                      <BsInstagram />
                    </i>
                  </a>
                </li>
                <li className="icon-item">
                  <a
                    href="https://github.com/JintuPaul"
                    className="icon-link"
                    target="blank"
                  >
                    <i>
                      <AiFillGithub />
                    </i>
                  </a>
                </li>
              </ul>
        </div>
      </div>
      <div className="text-center">
        <img className="banner-image text-center  m-auto" src={myImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
