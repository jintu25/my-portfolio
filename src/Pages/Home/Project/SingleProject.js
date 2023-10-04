import React from "react";
import { Link } from "react-router-dom";
import "./singleProject.css";
import { TbCornerUpRightDouble } from "react-icons/tb";

const SingleProject = ({ project }) => {
  const { name, img, details, img_url } = project;
  return (
    <div>
      <article className="card-singleProject w-full mb-6 md:mb-0">
        <img className="card__background" src={img_url} alt="project" />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title text-xl font-semibold text-white">
              {name}
            </h2>
            <p className="card__description mb-4 text-justify text-white">
              <>
                {details.length > 80 ? (
                  <span>{details.slice(0, 80) + "... "}</span>
                ) : (
                  <p className="mb-1">{details}</p>
                )}
              </>
            </p>
          </div>
          <div className="read-more-button text-justify">
            <Link to={`/projectsDetails/${project._id}`}>
                Read More
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SingleProject;

{
  /* <div className="card-actions justify-end">
                        <Link to={`/projectsDetails/${project._id}`}><button className='btn btn-primary text-4xl font-semibold'>
                            <TbCornerUpRightDouble></TbCornerUpRightDouble>
                            </button></Link>
                    </div> */
}
