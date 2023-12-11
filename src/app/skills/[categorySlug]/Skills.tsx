import React from 'react';

interface SkillsProps {
  labels: string[];
  data: string[][];
}

const Skills: React.FC<SkillsProps> = ({ labels, data }) => (
  <table className="flex flex-row table-auto pt-5">
    <tbody>
      {labels.map((label, index) => (
        <tr key={index} className="text-start">
          <td className="py-2 pe-4">{label}</td>
          <td className="ps-2">
            {data[index].map((skill, skillIndex) => (
              <span
                key={skillIndex}
              >
                {skill}
                {skillIndex < data[index].length - 1 && ' • '}
              </span>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Skills;
