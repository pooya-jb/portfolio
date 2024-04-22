import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <section
      className='flex flex-col items-center justify-center pb-10'
      id='projects'
    >
      <h2 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20 pb-10'>
        My Work
      </h2>
      <div className='h-full w-full flex flex-row flex-wrap justify-center md:flex-row gap-10 px-5'>
        <ProjectCard
          src='/SoSummit.png'
          link='https://sosummit.netlify.app/'
          company='SoSummit'
          title='Full Stack Developer'
          description='SoSummit is a Web and Mobile Application to facilitate coordination and improve the efficiency of emergency and rescue services. Marketed to Ski Resorts.'
          tasks={[
            'Contributed to a team of 5 developers in developing a web app utilizing React and styled it with CSS modules for a responsive design.',
            'Led the development of a mobile app for both Android and iOS platforms using React Native.',
            'Integrated Redux for effective state management, ensuring seamless data flow and scalability.',
            'Implemented new features,such as displaying location-based requests on the map using Leaflet and enabling real-time communication between users with Socket.IO.',
            'Actively participated in sprint planning, daily stand-ups, and review sessions. Collaborated closely with team members and stakeholders, ensuring the app meets user needs.',
          ]}
          techStack={[
            'TypeScript',
            'JavaScript',
            'React',
            'React Native',
            'Redux',
            'Node.js',
            'HTML',
            'CSS',
            'MongoDB',
            'Jest',
            'Git',
            'Docker',
            'CI/CD',
            'Leaflet',
          ]}
        />

        <ProjectCard
          src='/FitAIM.png'
          link='https://fit-aim.vercel.app'
          company='FitAIM'
          title='Full Stack Developer'
          description='FitAIM is a cutting-edge fitness application. Utilizing AI technology, users can access weekly workout & diet plans tailored to their individual goals and preferences, while also tracking their progress seamlessly.'
          tasks={[
            'Employed React to develop a single-page application (SPA), prioritizing optimal user experience.',
            'Utilized Chart.js for data visualization, enabling users to track their progress intuitively.',
            'Implemented efficient data modeling with MongoDB schemas to handle database queries seamlessly.',
            'Utilized JWT for secure and seamless authorization.',
            'Leveraged Node.js and Express for the backend implementation, ensuring robustness and scalability.',
            'Implemented prompt engineering by integrating OpenAI API into the application.',
          ]}
          techStack={[
            'JavaScript',
            'React',
            'GPT',
            'OpenAI API',
            'Node.js',
            'Express',
            'MongoDB',
          ]}
        />
        <ProjectCard
          src='/WeekendTraveller.jpeg'
          link='https://github.com/pooya-jb/weekend-traveller'
          company='Weekend Travller'
          title='Software Engineer'
          description='Your go-to platform for seamless, budget-friendly flights, unlocking infinite adventures with unbeatable prices.'
          tasks={[
            'Collaborated on organizing the codebase and refactoring the project from JavaScript to TypeScript, adhering to the DRY and clean code principles, making the application more testable and maintainable.',
            'Extended test coverage from 66% to 82% by writing unit and integration tests using Jest.',
            'Designed and implemented a new SQL table to store currency data obtained from Skyscanner API to replace previous hardcoded entries. Scheduled cron jobs using node-cron to regularly update the table, ensuring the application remains reliable and accurate',
          ]}
          techStack={[
            'JavaScript',
            'TypeScript',
            'PostgreSQL',
            'React',
            'REST APIs',
            'Jest',
            'react-testing-library',
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
