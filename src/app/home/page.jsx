'use client';

import './styles.css';
import '@/app/styles/fonts.css';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

export default function Home() {
  const [greetMessage, setGreetMessage] = useState('');
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
    const currentIndex = jobTitles.indexOf(currentJob);

    const nextIndex = (currentIndex + 1) % jobTitles.length;
    setCurrentJob(jobTitles[nextIndex]);
  };

  useEffect(() => {
    greetUser();
    changeJobTitle();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut" }}
      className="mb-10 text-3xl ms-1 mt-24"
    >
      <p>Good <span>{greetMessage}</span>, you!</p>
      <h1 className='fs-1'>I'm Stephen.</h1>
      <p className="wrap-child" id="job-title">
        I am a <span className="job" onClick={changeJobTitle}>{currentJob}</span>.
      </p>
    </motion.div>
  );
}
