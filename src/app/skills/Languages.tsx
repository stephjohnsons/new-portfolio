import React from 'react';

interface LanguagesProps {
  languages: string[];
  level: string[];
}

const Languages: React.FC<LanguagesProps> = ({ languages, level }) => (
  <table className="flex flex-row table-auto pt-5">
    <thead>
      <tr>
        <th className="py-2 pe-4">Language</th>
        <th className="ps-2">Level</th>
      </tr>
    </thead>
    <tbody>
      {languages.map((language, index) => (
        <tr key={index} className="text-start">
          <td className="py-2 pe-4">{language}</td>
          <td className="ps-2">{level[index]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);


export default Languages;
