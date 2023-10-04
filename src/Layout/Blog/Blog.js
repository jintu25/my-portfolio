import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  bg-[#140f25] border-r-4 border-slate-400 text-base-content">
            <li className='text-lg font-semibold text-white'>
              <Link to="/blog/fullstack">Full stack development</Link>
            </li>
            <li className='text-lg font-semibold text-white'>
              <Link to="/blog/basic">Basic of development</Link>
            </li>
            <li className='text-lg font-semibold text-white'>
              <Link to="/blog/react">React Js</Link>
            </li>
            <li className='text-lg font-semibold text-white'>
              <Link to="/blog/nextjs">Next Js</Link>
            </li>
            <li className='text-lg font-semibold text-white'>
              <Link to="/blog/node">Node Js</Link>
            </li>
            <li className='text-lg font-semibold text-white'>
              <Link to="/blog/mongodb">MongoDB</Link>
            </li>

          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default Blog;