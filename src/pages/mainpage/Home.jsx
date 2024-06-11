import React from "react";
import Navbar from "../../component/navebar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../component/footer/Footer";

function Home() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
