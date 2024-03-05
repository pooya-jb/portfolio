import React from 'react';
import classes from './HomePage.module.css';
import Skills from '../skills/Skills';

const HomePage = () => {
  return (
    <div>
      <p className={classes.name}>Hey I'M POOYA</p>
      <p className={classes.intro}>FULL-STACK DEVELOPER</p>
      <Skills></Skills>
    </div>
  );
};

export default HomePage;
