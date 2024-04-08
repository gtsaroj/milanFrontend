import React from "react";
import Live from "../../component/live/Live";
import Navbar from "../../component/navebar/Navbar";
import Footer from "../../component/footer/Footer";
import LiveDashbord from "../../component/live/LiveDashbord";

function LivePage() {
  return (
    <div>
      <Navbar />
      <LiveDashbord />
      <Footer />
    </div>
  );
}

export default LivePage;
