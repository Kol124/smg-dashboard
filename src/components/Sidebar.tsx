import React from "react";
import { ReactComponent as AddUserIcon } from "../assets/addUserIcon.svg";

export const Sidebar = () => {
  return (
    <div className="flex justify-center top-0 left-0 w-sidebar bg-primary text-white fixed h-full">
      <AddUserIcon className="mt-5" />
    </div>
  );
};
