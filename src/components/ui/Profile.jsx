import React from "react";

const Profile = ({ data }) => {

    const {image, username, role} = data;
  return (
    <div className="flex gap-6">
      <img src={image} alt="" className="w-16 h-16 rounded-full object-cover" loading="lazy"/>
      <div className="flex flex-col justify-between py-1">
        <span className="text-xl">{username}</span>
        <span className="text-gray-600 ">{role}</span>
      </div>
    </div>
  );
};

export default Profile;
