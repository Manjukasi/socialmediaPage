import React from "react";
import { Link } from "react-router-dom";
import { useParams,useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const {profileId} = useParams();
  return (
    <div className="sidebar">
      <ul className="nav-items">
        <Link to={`/profile/${profileId * 1}`} >
          <li>
          Profile {location.pathname.includes("/post") || location.pathname.includes("/gallery") || location.pathname.includes("/todo") ? !(<span className="arrow-right"> <i className="fa-solid fa-angle-right arrow-right"></i></span>) : (<span className="arrow-right"> <i className="fa-solid fa-angle-right arrow-right"></i></span>)}
          </li>
        </Link>
        <Link to="post">
          <li>Posts{location.pathname.includes("/post") &&  <span className="arrow-right"> <i className="fa-solid fa-angle-right arrow-right"></i></span> }</li>
        </Link>
        <Link to="gallery">
          <li className="nav">Gallery{location.pathname.includes("/gallery") &&  <span className="arrow-right"> <i className="fa-solid fa-angle-right arrow-right"></i></span> }</li>
        </Link>
        <Link to="todo">
          <li>Todo{location.pathname.includes("/todo") &&  <span className="arrow-right"> <i className="fa-solid fa-angle-right arrow-right"></i></span> }</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
