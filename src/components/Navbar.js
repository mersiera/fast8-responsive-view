import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between p-6 h-25 bg-white items-center">
      <div className="flex">
        <div className="block lg:hidden h-100 w-100 mt-4">
          <i className="fa-solid fa-bars text-5xl text-slate-500"></i>
        </div>
        <img src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/e196fd5534bec8a1696b426156b889d3.png" alt="gadjian-logo" className="ml-8 lg:ml-5 w-44" />
      </div>
      <div className="flex flex-row">
        <div className="hidden lg:block text-xl my-auto">
          Hallo, <span className="text-gadjian">Gadjian User</span>
        </div>
        <div className="ml-10 h-16 w-16 rounded-full border-[1px] border-gray-400 flex flex-row justify-center items-center">Photo</div>
      </div>
    </div>
  );
}

export default Navbar;
