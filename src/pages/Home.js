import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    document.title = 'Print Desk | printdesk.xyz';
  }, []);
  return (<>
    <Navbar />
    <div className="margin-all"><h1>Home Tab</h1></div>

    <Footer />
  </>
  )
}

export default Home