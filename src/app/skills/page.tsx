"use client";

import Cursor from '@/components/Cursor'
import BackButton from "@/components/BackButton"
import Image from 'next/image';
import { 
  Photoshop, 
  Illustrator, 
  XD, 
  Figma, 
  HTML, 
  CSS, 
  JS, 
  TS, 
  Ruby, 
  Rails, 
  PostgreSQL, 
  NodeJS, 
  Vue, 
  React, 
  Bootstrap, 
  Tailwind, 
  Wordpress, 
} from './frameworks';
import { useState } from 'react';
import './styles.css'
import '@/app/styles/fonts.css'

export default function About() {
  const [hoveredFramework, setHoveredFramework] = useState(null);
  const labels = [
    'Adobe Suite', 
    'Wireframing', 
    'Front-end', 
    'Back-end',
    'Frameworks',
    'CMS'
  ];
  const data = [
    [ 'Photoshop', 'Illustrator', 'XD' ],
    [ 'Figma', 'XD' ],
    [ 'HTML', 'CSS', 'JS & libraries', 'TS' ],
    [ 'Ruby on Rails', 'Ruby', 'Python', 'NodeJS', 'PostgreSQL' ],
    [ 'Vue', 'React', 'Bootstrap', 'Tailwind' ],
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

  return (
    <main className="flex min-h-screen min-w-screen flex-row justify-between p-24 border">
      <Cursor />
      <div className="basis-1/6">
        <BackButton />
      </div>
      <div className="basis-5/6">
        <div className='mb-10'>
          <h1 className="text-4xl font-extrabold">
            Skills
          </h1>
          <table className="flex flex-row table-auto pt-5">
            <th>
              {labels.map((label, index) => (
                <tr key={index} className="text-start">
                  <td className="py-2 pe-4">{label}</td>
                  <td className="ps-2">
                    {data[index].map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        onMouseEnter={() => setHoveredFramework(skill)}
                        onMouseLeave={() => setHoveredFramework(null)}
                      >
                        {skill}
                        {skillIndex < data[index].length - 1 && ' • '}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </th>
            {hoveredFramework && (
              <Image
                src={`./svg/${hoveredFramework}.svg`} 
                alt={hoveredFramework}
                width="30" 
                height="30" 
              />
            )}
          </table>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">Languages</h1>
            <table className="flex flex-row table-auto pt-5">
            <th>
              {languages.map((languages, index) => (
                <tr key={index} className="text-start">
                  <td className="py-2 pe-4">{languages}</td>
                  <td className="ps-2">{level[index]}</td>
                </tr>
              ))}
            </th>
          </table>
        </div>
      </div>
    </main>
  )
}
