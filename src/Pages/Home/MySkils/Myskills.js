import React, { useEffect } from "react";
import "./skills.css";
import Aos from "aos";
import 'aos/dist/aos.css'
import {
  DiJavascript1,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import {
  SiCodeclimate,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const Myskills = () => {
//   useEffect(() => {
//     Aos.init({duration: 3000})
//   }, [])
  return (
    <div id="skills" className="py-20">
      <h2 className="skill-text font-bold text-3xl lg:text-5xl text-center mb-5">
        My Skills
      </h2>
      <p className="w-full lg:w-1/2 m-auto text-slate-100 text-center text-lg mb-12">
      As a web developer, I have experience with a variety of technologies and programming languages. Here are some of the skills I have developed:
      </p>
      <div className="timeline relative max-w-screen-xl m-auto">
        <div className="skillCard py-4 px-12 relative w-1/2 left-0">
          <span className="bg-[#fff] rounded-full w-12 h-12 text-center text-4xl flex justify-center items-center skill-icon text-orange-500 font-bold">
            <DiJavascript1 />
          </span>
          <div className="card-text bg-white py-5 px-8 rounded-lg relative">
            <h3 className="text-3xl font-semibold font-[cursive] text-[#13006b] mb-4">
              javascript
            </h3>
            <p className=" font-[system-ui] text-[#1c0e0e] text-[16px] font-[600]">
              {" "}
              I have a strong understanding of JavaScript, which is a key
              component of building dynamic and interactive web pages. I am
              comfortable using JavaScript to manipulate the Document Object
              Model (DOM), handle events, create animations, and make AJAX
              requests to fetch data from APIs.
            </p>
            <s className="left-arrow"></s>
          </div>
        </div>

        <div className="skillCard right-skillCard  py-4 px-12 relative w-1/2 left-1/2">
          <span className="bg-[#fff] rounded-full w-12 h-12 text-center text-4xl flex justify-center items-center skill-icon right-icon text-sky-500 font-bold">
            <DiReact />
          </span>
          <div className="card-text bg-white py-5 px-8 rounded-lg relative">
            <h3 className="text-3xl font-semibold font-[cursive] text-[#13006b] mb-4">
              React
            </h3>
            <p className="font-[system-ui] text-[#1c0e0e] text-[16px] font-[600]">
              I am experienced in building complex web applications using React,
              a popular front-end JavaScript library for building user
              interfaces. I have experience in developing custom React
              components and integrating them into web applications, and using
              Redux for state management.
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        <div className="skillCard py-4 px-12 relative w-1/2 left-0">
          <span className="bg-[#fff] rounded-full w-12 h-12 text-center text-4xl flex justify-center items-center skill-icon font-bold text-black">
            <TbBrandNextjs />
          </span>
          <div className="card-text bg-white py-5 px-8 rounded-lg relative left-0">
            <h3 className="text-3xl font-semibold font-[cursive] text-[#13006b] mb-4">
              Next Js
            </h3>
            <p className="font-[system-ui] text-[#1c0e0e] text-[16px] font-[600]">
              I have experience working with Next.js, a popular open-source
              React framework that enables server-side rendering and static site
              generation. I have used Next.js to build scalable and performant
              web applications, including e-commerce sites, blogs, and marketing
              websites.
            </p>
            <s className="left-arrow"></s>
          </div>
        </div>

        <div className=" skillCard right-skillCard  py-4 px-12 relative w-1/2 left-1/2">
          <span className="bg-[#fff] rounded-full w-12 h-12 text-center text-4xl flex justify-center items-center skill-icon right-icon font-bold text-blue-600">
            <BsBootstrap />
          </span>
          <div className="card-text bg-white py-5 px-8 rounded-lg relative">
            <h3 className="text-3xl font-semibold font-[cursive] text-[#13006b] mb-4">
              Bootstrap
            </h3>
            <p className="font-[system-ui] text-[#1c0e0e] text-[16px] font-[600]">
              I am experienced in using Bootstrap, a popular front-end CSS
              framework that helps in designing and building responsive and
              mobile-first web pages. I have experience in customizing and
              styling Bootstrap components to suit specific design requirements
              and integrating them into web applications.
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        <div className="skillCard py-4 px-12 relative w-1/2 left-0">
          <span className="bg-[#fff] rounded-full w-12 h-12 text-center text-4xl flex justify-center items-center skill-icon font-bold text-sky-500">
            <SiTailwindcss />
          </span>
          <div className="card-text bg-white py-5 px-8 rounded-lg relative">
            <h3 className="text-3xl font-semibold font-[cursive] text-[#13006b] mb-4">
              tailwind
            </h3>
            <p className="font-[system-ui] text-[#1c0e0e] text-[16px] font-[600]">
              I have experience using Tailwind CSS, a popular utility-first CSS
              framework that helps in building responsive and modern web
              applications. I have used Tailwind CSS to style and design complex
              user interfaces and build custom components for web applications.
            </p>
            <s className="left-arrow"></s>
          </div>
        </div>

        <div className="skillCard  right-skillCard py-4 px-12 relative w-1/2 left-1/2">
          <span className="bg-[#fff] rounded-full w-12 h-12 text-center text-4xl flex justify-center items-center skill-icon right-icon font-bold text-blue-600">
            <SiCodeclimate />
          </span>
          <div className="card-text bg-white py-5 px-8 rounded-lg relative">
            <h3 className="text-3xl font-semibold font-[cursive] text-[#13006b] mb-4">
              Material UI
            </h3>
            <p className="font-[system-ui] text-[#1c0e0e] text-[16px] font-[600]">
              I have experience using Material UI, a popular React component
              library that implements Google's Material Design guidelines. I
              have used Material UI to build beautiful and responsive user
              interfaces for web applications.
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        <div className="skillCard py-4 px-12 relative w-1/2 left-0">
          <span className="bg-[#fff] rounded-full w-12 h-12 text-center text-4xl flex justify-center items-center skill-icon font-bold text-[#04ae04]">
            <DiNodejsSmall />
          </span>
          <div className="card-text bg-white py-5 px-8 rounded-lg relative">
            <h3 className="text-3xl font-semibold font-[cursive] text-[#13006b] mb-4">
              Node Js
            </h3>
            <p className="font-[system-ui] text-[#1c0e0e] text-[16px] font-[600]">
              I have experience using Node.js, a popular open-source server-side
              runtime environment that allows developers to build fast and
              scalable web applications. I have used Node.js to build full-stack
              web applications, RESTful APIs, and command-line tools.
            </p>
            <s className="left-arrow"></s>
          </div>
        </div>

        <div className="skillCard right-skillCard  py-4 px-12 relative w-1/2 left-1/2">
          <span className="bg-[#fff] rounded-full w-12 h-12 text-center text-4xl flex justify-center items-center skill-icon right-icon font-bold text-slate-800">
            <SiExpress />
          </span>
          <div className="card-text bg-white py-5 px-8 rounded-lg relative">
            <h3 className="text-3xl font-semibold font-[cursive] text-[#13006b] mb-4">
              Express Js
            </h3>
            <p className="font-[system-ui] text-[#1c0e0e] text-[16px] font-[600]">
              I have experience using Express.js, a popular Node.js web
              framework that allows developers to build fast and scalable web
              applications. I have used Express.js to build RESTful APIs,
              server-side rendered websites, and single-page applications.
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        <div className="skillCard py-4 px-12 relative w-1/2 left-0">
          <span className="bg-[#fff] rounded-full w-12 h-12 text-center text-4xl flex justify-center items-center skill-icon font-bold text-yellow-500">
            <SiFirebase />
          </span>
          <div className="card-text bg-white py-5 px-8 rounded-lg relative">
            <h3 className="text-3xl font-semibold font-[cursive] text-[#13006b] mb-4">
              Firebase
            </h3>
            <p className="font-[system-ui] text-[#1c0e0e] text-[16px] font-[600]">
              I have experience using Firebase, a popular mobile and web
              application development platform provided by Google. Firebase
              offers a suite of tools and services that allow developers to
              build fast and scalable applications with little to no backend
              development.
            </p>
            <s className="left-arrow"></s>
          </div>
        </div>

        <div className="skillCard right-skillCard  py-4 px-12 relative w-1/2 left-1/2">
          <span className="bg-[#fff] rounded-full w-12 h-12 text-center text-4xl flex justify-center items-center skill-icon right-icon text-green-600 font-bold">
            <DiMongodb />
          </span>
          <div className="card-text bg-white py-5 px-8 rounded-lg relative">
            <h3 className="text-3xl font-semibold font-[cursive] text-[#13006b] mb-4">
              MongoDB
            </h3>
            <p className="font-[system-ui] text-[#1c0e0e] text-[16px] font-[600]">
              I have experience using MongoDB, a popular NoSQL document database
              that allows developers to store and query data in a flexible and
              scalable manner. MongoDB is widely used in web and mobile
              application development, and is particularly well-suited for use
              with JavaScript-based stacks such as MEAN and MERN.
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myskills;
