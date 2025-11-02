import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="border border-amber-200 rounded-2xl p-4 space-y-1">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <Link className="btn btn-info" to={`/userDetails/${id}`}>
        Show details
      </Link>
    </div>
  );
};

export default User;
