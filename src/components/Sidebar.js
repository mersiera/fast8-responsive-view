import React from "react";

function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-1/4 lg:h-full lg:p-8">
      <div className="flex flex-row items-center cursor-pointer hover:text-gadjian">
        <span className="flex">
          <i className="fa-solid fa-house-chimney w-4 m-auto"></i>
        </span>
        <div className="ml-4">Beranda</div>
      </div>
      <div className="flex flex-row items-center mt-2 cursor-pointer hover:text-gadjian">
        <i className="fa-solid fa-people-group w-4 flex flex-row justify-center"></i>
        <div className="ml-4">Personnel List</div>
      </div>
      <div className="flex flex-row items-center mt-2 cursor-pointer hover:text-gadjian">
        <i className="fa-solid fa-calendar-days w-4 flex flex-row justify-center"></i>
        <div className="ml-4">Daily Attendance</div>
      </div>
    </div>
  );
}

export default Sidebar;
