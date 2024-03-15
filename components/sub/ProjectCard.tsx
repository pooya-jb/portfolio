'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import StarsCanvas from '../main/StarBackground';
import { Span } from 'next/dist/trace';
import classes from './ProjectCard.module.css';
import info from '../../public/info-i.svg';
import newTab from '../../public/link-external.svg';

interface Props {
  src: string;
  link: string;
  company: string;
  description: string;
  title: string;
  tasks?: string[];
  techStack: string[];
}

const ProjectCard = ({
  src,
  link,
  company,
  title,
  description,
  tasks,
  techStack,
}: Props) => {
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[21] hover: duration-300 ${classes.projectCard}`}
    >
      <div className={classes.imageContainer}>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className={`w-full object-contai ${classes.image} ${
              infoIsOpen ? classes.dark : ''
            }`}
          />
          <Image src={newTab} alt='more info' className={classes.newTab} />
          <p
            className={`mt-2 text-gray-400 ${classes.description} ${
              infoIsOpen ? classes.show : ''
            }`}
          >
            {description}
          </p>
        </a>
      </div>
      <div className='p-4'>
        <div
          className={`flex justify-between gap-2 items-center ${classes.companyDetails} `}
        >
          <h3
            className={`text-2xl font-semibold text-white ${classes.companyName}`}
          >
            {company}
          </h3>
          <span
            className={classes.infoContainer}
            onMouseEnter={() => setInfoIsOpen(true)}
            onMouseLeave={() => setInfoIsOpen(false)}
          >
            <Image src={info} alt='more info' className={classes.info} />
          </span>
        </div>
        <span className='text-gray-500 text-sm'>{title}</span>

        <ul className={classes.tasks}>
          {tasks?.map((task, index) => (
            <li key={index} className='text-gray-400 text-sm'>
              {task}
            </li>
          ))}
        </ul>
        <div className={`flex gap-2 mt-3 ${classes.techStack}`}>
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`text-gray-500 text-sm ${classes.tech}`}
            >
              {`#${tech}`}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
