import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../../image/logo1";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -100, scale: 0.5 }}
      transition={{ duration: 1 }}
      animate={{ y: 0, scale: 1 }}
      className="navbar sticky top-0 z-50 bg-[#140f25f2] justify-between"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52 text-white"
          >
            <li>
              <a className="text-slate-100" href="/">Home</a>
            </li>
            <li>
              <a className="text-slate-100" href="#about">About Me</a>
            </li>
            <li>
              <a className="text-slate-100" href="#skills">Skill</a>
            </li>
            <li>
              <a className="text-slate-100" href="#project">Project</a>
            </li>
            <li>
              <Link className="text-slate-100" to="/blog">Blogs</Link>
            </li>
            <li>
              <a className="text-slate-100" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <Link className=" flex justify-center items-center mr-5 md:mr-0" to="/">
          <img className="ml-5 md:ml-20 h-12 md:h-16 w-auto rounded-full" src={logo} alt="" />
          <h2 className="text-2xl md:text-4xl mr-10 font-bold font-mono  text-cyan-600">
            JP
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-slate-100" href="/">Home</a>
          </li>
          <li>
            <a className="text-slate-100" href="#about">About Me</a>
          </li>
          <li>
            <a className="text-slate-100" href="#skills">Skill</a>
          </li>
          <li>
            <a className="text-slate-100" href="#project">Project</a>
          </li>
          <li>
            <Link className="text-slate-100" to="/blog">Blogs</Link>
          </li>
          <li>
              <a className="text-slate-100" href="#contact">Contact</a>
            </li>
        </ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden justify-end"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </motion.div>
  );
};

export default Header;
