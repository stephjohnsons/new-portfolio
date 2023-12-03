'use client';

import './globals.css'
import '@/app/styles/fonts.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [docTitle, setDocTitle] = useState(document.title);
  const [greetMessage, setGreetMessage] = useState('');
  const [currentJob, setCurrentJob] = useState('web developer');

  const handleBlur = () => {
    document.title = "Come back :(";
  };

  const handleFocus = () => {
    document.title = docTitle;
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
    const currentIndex = jobTitles.indexOf(currentJob);

    const nextIndex = (currentIndex + 1) % jobTitles.length;
    setCurrentJob(jobTitles[nextIndex]);
  };

  useEffect(() => {
    greetUser();
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  return (
    <div className="fs-1 d-flex"> 
      <p>{greetMessage}</p>
      <h1> I'm Stephen. </h1>    
      <p className="cta"> 👇🏼 click me! </p>
      <p className="wrap-child" id="job-title">
          I am a <span className="job" onClick={changeJobTitle}>{currentJob}</span>.
      </p>
  </div>
  )
}
