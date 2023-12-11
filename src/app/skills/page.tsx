"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import './styles.css'
import '@/app/styles/fonts.css'
import { Box, Tabs, Tab } from "@mui/material";

import Skills from './[categorySlug]/Skills';
import Languages from './[categorySlug]/Languages';

interface SkillsProps {
  children: ReactNode;
}

const SkillPage: React.FC<SkillsProps> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState('Skills');

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

  const handleMenuClick = (menu: React.SetStateAction<string>) => {
    setSelectedMenu(menu);
  };

  return (
    <main className="flex min-w-screen flex-row justify-between p-10">
      <Box>
        <Box className='mb-10'>
          {/* <Tabs
            value={selectedMenu}
            onChange={(e, newValue) => handleMenuClick(newValue)}
          >
            <Tab label="Skills" value="Skills" onClick={() => handleMenuClick('Skills')} />
            <Tab label="Languages" value="Languages" onClick={() => handleMenuClick('Languages')} />
          </Tabs> */}
          <h1 className='text-4xl'>Skills</h1>
          <Skills labels={labels} data={data} /> 
        </Box>
        <Box className='pt-5'>
          <h1 className='text-4xl'>Spoken Languages</h1>
          <Languages languages={languages} level={level} />
        </Box>
      </Box>
    </main>
  )
}

export default SkillPage