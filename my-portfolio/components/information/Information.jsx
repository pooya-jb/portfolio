import classes from './Information.module.css';
import Skills from '../skills/Skills';

const Information = () => {
  return (
    <div className={classes.information}>
      <p className={classes.name}>Hello! I'm Pooya,</p>
      <p className={classes.intro}>
        an experienced FULL-STACK DEVELOPER passionate about creating immersive
        digital experiences. With expertise in JavaScript, React, and Node.js, I
        specialize in building responsive web applications that captivate users
        and drive business growth. From collaborating on innovative projects to
        solving complex challneges, I bring a creative and results-driven
        approach to evrey endeavor. Explore my portfolio to see my work or reach
        out to discuss potential collaborations!
      </p>
      <p></p>
      <Skills />
    </div>
  );
};

export default Information;
