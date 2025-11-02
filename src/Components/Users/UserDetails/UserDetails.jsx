import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetrails = () => {
  const user = useLoaderData();
  const { name, email, phone, website } = user;
  return (
    <div className="border border-amber-200 rounded-2xl p-4 space-y-1">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
};

export default UserDetrails;
