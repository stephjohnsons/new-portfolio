import Cursor from '@/components/Cursor'
import TopButton from "@/components/TopButton"
import './styles.css'
import '@/app/styles/fonts.css'

export default function About() {
  const position = [
    'Software Developer',
    'Web Developer',
    'Apprentice • Industry Training Bootcamp',
  ];
  const employer = [
    'Mulah Technologies',
    'Freelance',
    'Brainnest'
  ];
  const duration = [
    'Aug 2023 - present',
    'Mar 2023 - Jul 2023',
    'Jan 2023 – Feb 2023',
  ]

  return (
    <main className="flexmin-w-screen flex-row justify-between p-10">
      <div className="basis-1/6 me-8">
        <TopButton />
      </div>
      <div className="basis-5/6">
        <div className='mb-10'>
          <h1 className="text-4xl font-extrabold">About</h1>
          <p className='pt-5 pe-10'>
          I am a web developer with an interest in content creation,<br />
          and I'm currently a software developer with Mulah Technologies.<br />
          <br />
          Initiallty a classically trained cellist,<br />
          but I have always been passionate about digital technologies and architecture.<br />
          A nick for details could be my middle name, but I much prefer to be called a foodie!<br />
          <br />
          In my work, I focus on interactibility and usability of websites.<br />
          A good website should not only be aesthetic and pretty,<br />
          but also accessible to different types of users.<br />
          </p>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">Experience</h1>
          {position.map((position, index) => (
              <ul key={index} className='pt-4 pe-10'>
                <li className="py-2 pe-4">
                  {position}<br />
                  {employer[index]}<br />
                  {duration[index]}
                </li>
              </ul>
            ))}
        </div>
      </div>
    </main>
  )
}
