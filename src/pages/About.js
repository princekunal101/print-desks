import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    document.title = 'About us | printdesk.xyz';
  }, []);

  return (<>
    <Navbar />
    <div className="margin-all">
      <h1>About us</h1>
    </div>

    <Footer />
  </>)
}

export default About