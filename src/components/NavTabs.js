import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs flex bg-green">
      <li className="nav-itemn m-5 text-blue-500 hover:text-blue-800" >
        <a 
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}
        >
          Home
        </a>
      </li>
      <li className="nav-item m-5 text-blue-500 hover:text-blue-800">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`
          className={currentPage === 'About'}
        >
          About
        </a>
      </li>
      <li className="nav-item m-5 text-blue-500 hover:text-blue-800" >
        <a
          href="#project"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Project`
          className={currentPage === 'Project'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item m-5 text-blue-500 hover:text-blue-800">
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
  );
}

export default NavTabs;