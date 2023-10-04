import Blog from "../Layout/Blog/Blog";
import Basic from "../Pages/Blogs/Basic/Basic";
import Blogs from "../Pages/Blogs/Blogs";
import FullStack from "../Pages/Blogs/FullStack/FullStack";
import Mongodb from "../Pages/Blogs/MongoDB/Mongodb";
import NextJs from "../Pages/Blogs/NextJs/NextJs";
import Node from "../Pages/Blogs/NodeJs/Node";
import ReactJs from "../Pages/Blogs/React/ReactJs";
import About from "../Pages/Home/About/About";
import Project from "../Pages/Home/Project/Project";
import ProjectDetails from "../Pages/Home/Project/ProjectDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
      {
        path: "/projectsDetails/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-jintu45.vercel.app/projects/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
    children: [
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/basic",
        element: <Basic></Basic>,
      },
      {
        path: "/blog/fullstack",
        element: <FullStack></FullStack>,
      },
      {
        path: "/blog/react",
        element: <ReactJs></ReactJs>,
      },
      {
        path: "/blog/nextjs",
        element: <NextJs></NextJs>,
      },
      {
        path: "/blog/node",
        element: <Node></Node>,
      },
      {
        path: "/blog/mongodb",
        element: <Mongodb></Mongodb>,
      },
    ],
  },
]);

export default router;
