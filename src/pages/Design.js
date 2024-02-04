import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DesignTab = () => {

  useEffect(() => {
    document.title = 'Design Cover Page | printdesk.xyz';
  }, []);
  return (<>
    <Navbar />
    <div className="margin-all">
      <h1>Design Tab</h1>
    </div>
    <Footer />
  </>)
}

export default DesignTab