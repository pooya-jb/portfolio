import React from 'react';
import classes from './Skill.module.css';

const Skill = ({ name }) => {
  return (
    <div className={classes.container}>
      <div className={classes.skill}>{name}</div>
    </div>
  );
};

export default Skill;
