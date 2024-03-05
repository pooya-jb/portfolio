import Link from 'next/link';
import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <nav>
        <ul className={classes.navlist}>
          <Link href='./home'>HOME</Link>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
