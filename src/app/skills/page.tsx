"use client";

import { useState } from 'react';
import './styles.css'
import '@/app/styles/fonts.css'
import { Box } from "@mui/material";

import Skills from './Skills';
import Languages from './Languages';

export default function About() {
  const [showSkills, setShowSkills] = useState(true);
  const [showLanguages, setShowLanguages] = useState(false);

  const labels = [
    'Adobe Suite', 
    'Wireframing', 
    'Front-end', 
    'Back-end',
    'Frameworks',
    'CMS'
  ];
  const data: string[][] = [
    [ 'Photoshop', 'Illustrator', 'XD' ],
    [ 'Figma', 'XD' ],
    [ 'HTML', 'CSS', 'JS & libraries', 'TS' ],
    [ 'Ruby on Rails', 'Ruby', 'Python', 'NodeJS', 'PostgreSQL' ],
    [ 'Vue', 'ReactJS', 'Bootstrap', 'Tailwind' ],
    [ 'Wordpress', 'Wix', 'Shopify' ]
  ];
  const languages = [
    'English', 
    'Malay',
    'Mandarin', 
    'Cantonese',
    'German',
    'Spanish',
    'Japanese', 
  ]
  const level = [
    'Native', 
    'Native',
    'Proficient', 
    'Conversational',
    'Beginner (CEFR A2)',
    'Beginner (CEFR A1)',
    'Beginner (N5)', 
  ]

  const handleSkillsClick = () => {
    setShowSkills(true);
    setShowLanguages(false);
  };

  const handleLanguagesClick = () => {
    setShowLanguages(true);
    setShowSkills(false);
  };

  return (
    <main className="flex min-w-screen flex-row justify-between p-10">
      <Box>
        <Box className='mb-10'>
          <div className="submenu-buttons g-2">
            <button onClick={handleSkillsClick} className=" text-3xl">Skills</button>
            <button onClick={handleLanguagesClick} className="ms-3 text-3xl">Languages</button>
          </div>
          {showSkills && <Skills labels={labels} data={data} />}
          {showLanguages && <Languages languages={languages} level={level} />}
        </Box>
      </Box>
    </main>
  )
}
