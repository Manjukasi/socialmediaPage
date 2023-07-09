import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const test = useParams();
  return (
    <div className="sidebar">
      <ul className="nav-items">
        <Link to={`/profile/${test.profileId * 1}`}>
          <li>Profile</li>
        </Link>
        <Link to="post">
          <li>Posts</li>
        </Link>
        <Link to="gallery">
          <li>Gallery</li>
        </Link>
        <Link to="todo">
          <li>Todo</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
