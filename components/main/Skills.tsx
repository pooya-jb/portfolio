import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from '@/constants';
import React from 'react';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';

const Skills = () => {
  return (
    <section
      id='skills'
      className='flex flex-col items-center justify-center gap-3 relative overflow-hidden py-10 z-[21]'
      style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />

      {/* <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((skill, index) => (
          <SkillDataProvider
            key={index}
            skill_name={skill.skill_name}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Backend_skill.map((skill, index) => (
          <SkillDataProvider
            key={index}
            skill_name={skill.skill_name}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      {/* <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}

      {/* <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div> */}
      <div className='cursive text-[25px] text-gray-400 text-center mt-20 hover:text-white duration-300'>
        I'm eager to learn and embrace new technologies.
      </div>
    </section>
  );
};

export default Skills;
