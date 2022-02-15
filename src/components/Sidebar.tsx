import React from "react";
import { ReactComponent as AddUserIcon } from "../assets/usersIcon.svg";

export const Sidebar = () => {
  return (
    <div className="top-0 left-0 w-0 bg-primary text-white text-center fixed h-full sm:w-sidebar">
      <AddUserIcon className="sm:mt-5 sm:block sm:mx-auto sm:static absolute bottom-2 left-2 shadow-md rounded-full cursor-pointer" />
      <p className="uppercase text-small mt-2">Add a user</p>
    </div>
  );
};
