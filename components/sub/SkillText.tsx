'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import classes from './SkillText.module.css';

const SkillText = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='w-full h-auto flex flex-col items-center justify-center'
    >
      <h1
        className={`text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 mt-10 ${classes.title}`}
      >
        My Tech Stack
      </h1>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className={`text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] ${classes.description}`}
      >
        Extensive experience in developing applications using modern
        technologies.
      </motion.div>
    </motion.div>
  );
};

export default SkillText;
