import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <div className="flex flex-row h-full relative">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default Home;
