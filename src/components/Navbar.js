import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial call to handleResize
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
const handleToggle =() =>{
  setIsMenuOpen(!isMenuOpen)
}

  return (
    <nav>
      <div className="Logo"><strong>PRINT DESK</strong></div>
      {isMobile ? (
          <div className="Menu-icon" onClick={handleToggle}>☰</div>
      ) : (
        <ul className="Nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/design">Design</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      )}{isMenuOpen ? (
            <>
              <div className='Menu-nav-drawer right-0 top-0 left-0'>
                <button className='Close-bn absolute right-0 top-0' onClick={handleToggle}>×</button>
                <ul className="Menu-nav-links width-full">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/design">Design</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
            </>
          ) :
            ( <></>
       )}
    </nav>
  );
};

export default Navbar;
