import React from 'react';
import classes from './Skills.module.css';
import Skill from './skill/Skill';
const Skills = () => {
  return (
    <div className={classes.skills}>
      <h2>Frontend:</h2>
      <div className={classes.frontend}>
        <Skill name='JavaScript' />
        <Skill name='TypeScript' />
        <Skill name='React' />
        <Skill name='Angular' />
        <Skill name='React Native' />
        <Skill name='Next.js' />
        <Skill name='Redux' />
        <Skill name='Redux Toolkit' />
        <Skill name='jQuery' />
        <Skill name='HTML' />
        <Skill name='CSS' />
      </div>
      <h2>Backend:</h2>
      <div className={classes.backend}>
        <Skill name='Node.js' />
        <Skill name='Express' />
        <Skill name='Koa' />
        <Skill name='GraphQL' />
        <Skill name='MongoDB' />
        <Skill name='Mongoose' />
        <Skill name='SQL' />
        <Skill name='PostgreSQL' />
        <Skill name='Sequelize' />
        <Skill name='Socket.IO' />
      </div>
      <h2>Testing:</h2>
      <div className={classes.testing}>
        <Skill name='Jest' />
        <Skill name='Mocha' />
        <Skill name='React-testing-library' />
      </div>
      <h2>DevOps/Tooling:</h2>
      <div className={classes.testing}>
        <Skill name='Docker' />
        <Skill name='CD/CI' />
      </div>
    </div>
  );
};

export default Skills;
