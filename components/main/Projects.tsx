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
            'Contributed to developing a web app utilizing React and styled it with Chakra UI alongside vanilla CSS for a responsive design.',
            'Led the development of a mobile app for both Android and iOS platforms using React Native.',
            'Utilized Redux for effective state management across both web and mobile applications.',
            'Implemented new features, including displaying location-based alerts on the map (utilizing Leaflet) and push notifications.',
            'Integrated Socket.IO, enabling real-time communication between the server and frontend.',
            'Participated in daily meetings, code reviews, and pair programming to continuously deliver improvements using Agile methodologies.',
          ]}
          techStack={[
            'TypeScript',
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
            'Implemented efficient data modeling with MongoDB schemas to handle database queries seamlessly.',
            'Utilized JWT for secure and seamless authorization.',
            'Leveraged Node.js and Express for the backend implementation, ensuring robustness and scalability.',
            'Gained valuable experience in prompt engineering through integrating OpenAI API into the application.',
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
            'Collaborated with refactoring the project from JavaScript to TypeScript for reliable and maintainable code.',
            'Extended test coverage by 14% by writing unit and integration tests, using Jest.',
            'Added product features by adding new routes in the backend using Skyscanner API.',
            'Designed and implemented new SQL tables that utilize primary keys for efficient data retrieval. This enabled seamless integration with the existing data structure in the relational database.',
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
