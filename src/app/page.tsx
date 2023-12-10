"use client"

import Image from 'next/image'
import './home/styles.css'
import '@/app/styles/fonts.css'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'

export default function Home() {
  const [greetMessage, setGreetMessage] = useState('morning');
  const [currentJob, setCurrentJob] = useState('web developer');

  const greetUser = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
      setGreetMessage(`morning`);
    } else if (hour < 18) {
      setGreetMessage(`afternoon`);
    } else {
      setGreetMessage(`evening`);
    }
  };

  const changeJobTitle = () => {
    const jobTitles = ['web developer', 'UI/UX designer', 'digital content creator', 'dreamer'];

    setCurrentJob((prevJob) => {
      const currentIndex = jobTitles.indexOf(prevJob);
      const nextIndex = (currentIndex + 1) % jobTitles.length;
      return jobTitles[nextIndex];
    });
  };

  useEffect(() => {
    greetUser();
    changeJobTitle();
  }, []);

  return (
    <main className="flex min-w-screen max-h-1 flex-col justify-between p-10 columns-2">
      <Box
        className="mb-10 text-3xl ms-1 mt-24 flex"
      >
        <Box className="-ms-44">
          <iframe 
            src="https://lottie.host/embed/1462331b-0d0f-44bf-8f2a-52d004b2e67a/gcXPSTtHcl.json"
            width="600" 
            height="550" 
          ></iframe>
        </Box>
        <Box className='-ms-72'>
          <p>Good {greetMessage}, you!</p>
          <h1> I'm Stephen. </h1>    
          <p className="wrap-child" id="job-title">
            I am a <span className="job" onClick={changeJobTitle}>{currentJob}</span>.
          </p>
          <p className='ms-40 text-xl opacity-50'>👆🏻 Click me!</p>
        </Box>
      </Box>
    </main>
  );
}
