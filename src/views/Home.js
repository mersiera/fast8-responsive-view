import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <div className="flex flex-row h-full relative">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </div>
  );
}

export default Home;
