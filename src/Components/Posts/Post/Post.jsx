import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="flex flex-col justify-between border border-amber-200 rounded-2xl p-4 space-y-1">
      <h2 className="text-4xl text-center">{id}</h2>
      <h2 className="text-2xl text-center">{title}</h2>
      <button onClick={handleShowDetails} className="btn btn-accent">Click to see details</button>
      <Link className="btn btn-info" to={`/posts/${id}`}>
        Post Detail
      </Link>
    </div>
  );
};

export default Post;
