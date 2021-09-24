import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
    <ul className="nav nav-tabs flex bg-black text-white text-2xl ">
      <li className="nav-itemn m-5" >
        <a 
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}
        >
          Home
        </a>
      </li>
      <li className="nav-item m-5 text-2xl ">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`
          className={currentPage === 'About'}
        >
          About
        </a>
      </li>
      <li className="nav-item m-5 text-2xl " >
        <a
          href="#project"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Project`
          className={currentPage === 'Project'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item m-5 text-2xl " >
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`
          className={currentPage === 'Resume'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item m-5 text-2xl ">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`
          className={currentPage === 'Contact'}
        >
          Contact
        </a>
      </li>
    </ul>
    </header>
  );
}

export default NavTabs;
