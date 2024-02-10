import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ErrorImg from "../sad-emoji.webp"

const Page404 = () => {
  useEffect(() => {
    document.title = '404 Not Found | printdesk.xyz';
  }, []);

  return (
    <>
      <Navbar />
      <div className="not-found-container margin-all">
          <h1>404 Not Found</h1>
          <img className="forbidden-emoji" src={ErrorImg} alt="not-found-emoji"></img>
          <h1>Sorry, The page you are looking that not exist.</h1>
          <a href="https://printdesk.xyz">Retrun to Home Page</a>
      </div>
      <Footer />
    </>
  )
}

export default Page404