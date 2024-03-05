import React from 'react';
import classes from './Skills.module.css';
import Skill from './skill/Skill';
const frontend = [
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'React Native',
  'Next.js',
  'Redux',
  'Redux Toolkit',
  'jQuery',
  'HTML',
  'CSS',
];

const backend = [
  'Node.js',
  'Express',
  'Koa',
  'GraphQL',
  'MongoDB',
  'Mongoose',
  'SQL',
  'PostgreSQL',
  'Sequelize',
  'Socket.IO',
  'REST API',
];

const testing = ['Jest', 'Mocha', 'React-testing-library', 'Vitest'];

const devOps = ['Docker', 'CI/CD'];

const Skills = () => {
  return (
    <div className={classes.skills}>
      <div className={classes.techStack}>Tech Stack</div>
      <div className={classes.stack}>
        <div className={classes.title}>
          <h3>Frontend</h3>
        </div>
        <div className={classes.frontend}>
          {frontend.map((skill) => (
            <Skill name={skill} />
          ))}
        </div>
      </div>
      <div className={classes.stack}>
        <div className={classes.title}>
          <h3>Backend</h3>
        </div>
        <div className={classes.backend}>
          {backend.map((skill) => (
            <Skill name={skill} />
          ))}
        </div>
      </div>
      <div className={classes.stack}>
        <div className={classes.title}>
          <h3>Testing</h3>
        </div>
        <div className={classes.testing}>
          {testing.map((skill) => (
            <Skill name={skill} />
          ))}
        </div>
      </div>
      <div className={classes.stack}>
        <div className={classes.title}>
          <h3>DevOps/Tooling</h3>
        </div>
        <div className={classes.testing}>
          {devOps.map((skill) => (
            <Skill name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
