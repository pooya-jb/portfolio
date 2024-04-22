'use client';

import { Socials } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('about-me');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const top = section.offsetTop;
        console.log(top);
        const height = section.offsetHeight;
        if (window.scrollY >= top - 30 && window.scrollY < top + height - 30) {
          console.log(section.id);
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);

  return (
    <div
      className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ${classes.navbar}`}
    >
      <div className='w-full h-full flex flex-row items-center justify-between mx-auto px-[10px]'>
        <a
          href='#about-me'
          className='h-auto w-auto flex flex-row items-center'
        >
          <div className='overflow-hidden rounded-full cursor-pointer hover:animate-slowspin'>
            <Image
              src='/profile.jpg'
              alt='logo'
              width={40}
              height={40}
              className='hover:scale-105 duration-300'
            />
          </div>

          <span className='ml-[10px] hidden md:block text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-colors duration-300'>
            Pooya Jafariberenji
          </span>
        </a>
        <div className={` h-full flex flex-row justify-center items-center `}>
          <div
            className={`min-w-[500px] flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e]  px-[20px] py-[10px] rounded-full text-gray-200 gap-5 ${classes.navLinks} `}
          >
            <a
              href='#about-me'
              className={`cursor-pointer ${
                activeLink === 'about-me'
                  ? `text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] to-purple-400 transition-colors duration-300`
                  : 'text-white-200'
              } hover:scale-105`}
            >
              About me
            </a>
            <a
              href='#skills'
              className={`cursor-pointer ${
                activeLink === 'skills'
                  ? `text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] to-purple-400 transition-colors duration-300`
                  : 'text-white'
              } hover:scale-105`}
            >
              Skills
            </a>
            <a
              href='#projects'
              className={`cursor-pointer ${
                activeLink === 'projects'
                  ? `text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] to-purple-400 transition-colors duration-300`
                  : 'text-white-200'
              } hover:scale-105`}
            >
              My Work
            </a>
            <a
              href='#contact'
              className={`cursor-pointer ${
                activeLink === 'contact'
                  ? `text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] to-purple-400 transition-colors`
                  : 'text-white-200'
              } hover:scale-105`}
            >
              Contact
            </a>
          </div>
        </div>

        <div className='flex flex-row gap-3'>
          {Socials.map((social) => (
            <a href={social.link} target='_blank'>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={20}
                height={20}
                className={classes.linkImage}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
