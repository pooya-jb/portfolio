'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import classes from './SkillDataProvider.module.css';

interface Skill {
  skill_name: string;
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  skill_name,
}: Skill) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className={`flex flex-col justify-center h-90 hover:text-white duration-300 ${classes.skill}`}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt='skill image'
        className={classes.skillImg}
      />
      <div className='text-gray-500 opacity-90 text-center'>{skill_name}</div>
    </motion.div>
  );
};

export default SkillDataProvider;
