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
      <h3>About us</h3>

      <h2>What is Print Desk?</h2>
      <p><strong>printdesk.xyz</strong> is a college mini project. It is open source on <a className="link-bld-blk" href="https://github.com/princekunal101/print-desk/">GitHub</a>. You can join with us. which is solve the student's problem inside the colleges & some other Platform. A Platform where students convert soft-copy to hard-copy using Engineering.</p>

      <h2>Why I choose this project?</h2>
      <p>As an Engineering student we need to solve their problems and Societies problem. My friend was facing issue to Design their Assignment Cover pages and Lab files cover pages. so, I introducing the new way to solve the problems Just Design on <a className="link-bld-blk" href="https://printdesk.xyz">Print Desk</a>.</p>

      <h2>Why only this?</h2>
      <p>Just wait, Let's finish. when my friend will design their cover pages then <em>where will they go to print?</em> I have the solution you can print Doc's, Pdf and so on. Just transfer the file from <a className="link-bld-blk" href="https://printdesk.xyz">Print Desk</a> and pay their relay able price, then you got your hard copy on the specific area of your college.</p>

      <h2>Who am I?</h2>
      <p>I am an Engineering students which have assign a mini project so, I decided we have to do this project as mini project.</p>

      <h3>FAQ</h3>

      <h2>Is it working now?</h2>
      <p> Yes. It is working now. You can your Design Cover Page. It will be working fully soon.</p>

      <h2>Is Printing Service open?</h2>
      <p>No. This Project is on initial stage. This is still on progress. It will be working fully on after the semester exam.</p>
    </div>

    <Footer />
  </>)
}

export default About