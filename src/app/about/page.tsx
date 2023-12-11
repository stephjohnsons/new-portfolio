
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
            <div>
        <div className='mb-10'>
          <h1 className="text-4xl font-extrabold">About</h1>
          <p className='pt-5 pe-10'>
          I am a web/software developer with an interest in content creation and UX design.
          I was a classically trained cellist but 
          I have always been passionate about digital technologies and architecture. 
          A nick for details could be my middle name, 
          but I much prefer to be called a foodie!
          <br /><br />
          In my work, I focus on interactability and usability of websites. 
          A good website should not only be aesthetic and pretty, 
          but also accessible to different types of users.
          <br /><br />
          {/* I have some junks on my desk at the moment... */}
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
