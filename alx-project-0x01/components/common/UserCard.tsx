import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = (user) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1"><strong>Username:</strong> {user.username}</p>
      <p className="text-gray-600 mb-1"><strong>Email:</strong> {user.email}</p>
      <p className="text-gray-600 mb-1"><strong>Phone:</strong> {user.phone}</p>
      <p className="text-gray-600 mb-1"><strong>Website:</strong> <a href={`http://${user.website}`} className="text-blue-500 hover:underline">{user.website}</a></p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700">Address</h3>
        <p className="text-gray-600">{user.address.street}, {user.address.suite}</p>
        <p className="text-gray-600">{user.address.city}, {user.address.zipcode}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600"><strong>Name:</strong> {user.company.name}</p>
        <p className="text-gray-600"><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
        <p className="text-gray-600"><strong>BS:</strong> {user.company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
