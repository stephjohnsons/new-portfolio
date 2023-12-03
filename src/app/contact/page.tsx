import Cursor from '@/components/Cursor'
import BackButton from "@/components/BackButton"
import './styles.css'
import '@/app/styles/fonts.css'
import Sidebar from '@/components/Sidebar'

export default function About() {
  const labels = [
    'Email', 
    'LinkedIn', 
    'GitHub', 
    'Resume'
  ];
  const data = [
    <a href="mailto:info@stephjohnsons.com">info@stephjohnsons.com</a>, 
    <a href="https://www.linkedin.com/in/stephentseu/">Stephen Tseu</a>, 
    <a href="https://github.com/stephjohnsons">@stephjohnsons</a>, 
    <a href="https://drive.google.com/file/d/14NhzslgMU8rJRlM727mMHHBtDwqtCLBw/view">click here</a>
  ];

  return (
    <main className="flex min-h-screen min-w-screen flex-row justify-between p-24 border">
      <Cursor />
      <div className="basis-1/6">
        <BackButton />
      </div>
      <div className="basis-5/6">
        <h1 className="text-4xl font-extrabold">Contact</h1>
        <table className="flex flex-row table-auto pt-5">
          <th>
            {labels.map((label, index) => (
              <tr key={index} className="text-start">
                <td className="py-2 pe-4">{label}</td>
                <td className="ps-2">{data[index]}</td>
              </tr>
            ))}
          </th>
        </table>
      </div>
    </main>
  )
}
