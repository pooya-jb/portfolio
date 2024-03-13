import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <section
      className='flex flex-col items-center justify-center py-10 mb-20'
      id='projects'
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/SoSummit.png'
          link='https://sosummit.netlify.app/'
          company='SoSummit'
          title='Full Stack Developer'
          description='SoSummit is a Web and Mobile Application to facilitate coordination and improve efficiency of emergency and rescue services. Marketed to Ski Resorts.'
          tasks={[
            'Contributed to developing a web app utilizing React and styled it with Chakra UI alongside vanilla CSS for a responsive design.',
            'Utilized Redux for effective state management across both web and mobile applications.',
            'Implemented new features, including displaying location-based alerts on the map (utilizing Leaflet) and push notifications.',
            'Integrated Socket.IO, enabling real-time communication between the server and frontend.',
            'Participated in daily meetings, code review, and pair programming to continuously deliver improvements using Agile methodologies.',
          ]}
          techStack={[
            'TypeScript',
            'React',
            'React Native',
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
          src='/WeekendTraveller.jpeg'
          link='https://sosummit.netlify.app/'
          company='Weekend Travller'
          title='Full Stack Developer'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          techStack={['React', 'HTML']}
        />
        <ProjectCard
          src='/FitAIM.png'
          link='https://sosummit.netlify.app/'
          company='FitAIM'
          title='Full Stack Developer'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          techStack={['React', 'HTML']}
        />
      </div>
    </section>
  );
};

export default Projects;
