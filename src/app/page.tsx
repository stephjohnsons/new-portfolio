'use client';

import Image from 'next/image'
import Cursor from '@/components/Cursor'
import './home/styles.css'
import '@/app/styles/fonts.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [greetMessage, setGreetMessage] = useState('');
  const [currentJob, setCurrentJob] = useState('web developer');

  const handleBlur = () => {
    document.title = "Come back :(";
  };

  const greetUser = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
      setGreetMessage(`Good morning, you.`);
    } else if (hour < 18) {
      setGreetMessage(`Good afternoon, you.`);
    } else {
      setGreetMessage(`Good evening, you.`);
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
    <main className="flex min-w-screen flex-row justify-between p-10">
      <div className="mb-10 text-3xl ms-1 mt-24">
        <p>{greetMessage}</p>
        <h1> I'm Stephen. </h1>    
        <p className="cta"> 👇🏼 click me! </p>
        <p className="wrap-child" id="job-title">
          I am a <span className="job" onClick={changeJobTitle}>{currentJob}</span>.
        </p>
      </div>
    </main>
  );
}
