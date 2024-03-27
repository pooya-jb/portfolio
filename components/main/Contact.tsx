'use client';
import React, { useState, FormEvent } from 'react';
import classes from './Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, company, email, message);
  };

  return (
    <section
      className='flex flex-col items-center py-20 z-[22] mb-40 '
      id='contact'
    >
      <h2 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
        Contact
      </h2>
      <p className={`cursive text-gray-400 text-3xl my-5 ${classes.eager}`}>
        I'm ready to leverage my skills and experience in a dynamic environment.
      </p>
      <div
        className={`flex flex-col align-center justify-center items-center w-3/5 gap-5 ${classes.contactForm}`}
      >
        <div className='w-1/2 text-center'>
          <a href='mailto:jb.pooya@gmail.com'>
            <button type='submit' className={classes.emailBtn}>
              Write me an Email
            </button>
          </a>
        </div>
        <p className='text-gray-400'>or</p>
        <p className='text white text-md text-gray-200'>
          Let's schedule a Google Meet and chat about how I can bring value to
          your project!
        </p>
        {/* <form
          onSubmit={submitHandler}
          className={`flex flex-col w-1/2 gap-2 ${classes.form}`}
        >
          <label htmlFor='name' className='text-gray-400'>
            Your Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='rounded-sm'
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor='company' className='text-gray-400'>
            Your Company
          </label>
          <input
            type='text'
            name='company'
            id='company'
            className='rounded-sm'
            required
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
          <label htmlFor='email' className='text-gray-400'>
            Your Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            className='rounded-sm'
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor='message' className='text-gray-400'>
            Your Message
          </label>
          <textarea
            rows={4}
            name='message'
            id='message'
            className='rounded-sm'
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            type='submit'
            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg w-1/2 mt-5 mx-auto'
          >
            Send
          </button>
        </form> */}

        <div className={classes.googleCalendar}>
          <iframe
            src='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RmZNj8UBfCXcUD8YLLqYEOy9TATb9mWNe0RbHHm-GyemiOX1KqAcpXds-PPtBhlpga-b-ND0x?gv=true'
            width='1000'
            height='700'
            frameborder='0'
            scrolling='auto'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
