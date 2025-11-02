import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();
  const post = useLoaderData();
  const {postId} = useParams();
  console.log(postId);
  const { id, title, body } = post;
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col justify-between border border-amber-200 rounded-2xl p-4 space-y-1">
      <h2 className="text-4xl text-center">{id}</h2>
      <h2 className="text-2xl text-center">{title}</h2>
      <p className="text-xl text-center">{body}</p>
      <button className="btn btn-info" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
};

export default PostDetails;
