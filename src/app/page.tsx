"use client"

import './home/styles.css'
import '@/app/styles/fonts.css'
import { Box } from '@mui/material'

export default function Home() {
  let greetMessage;
  const date = new Date();
  const hour = date.getHours();

  if (hour < 12) {
    greetMessage = "morning";
  } else if (hour < 18) {
    greetMessage = "afternoon";
  } else {
    greetMessage = "evening";
  };

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
            I am a web developer.
          </p>
        </Box>
      </Box>
    </main>
  );
}
