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
    'Jan 2023 - Feb 2023',
  ]

  return (
    <main className="flex min-w-screen flex-row justify-between p-10">
      <div>
        <div className='mb-10'>
          <h1 className="text-4xl font-extrabold">Works</h1>
          <p className='pt-5 pe-10'>
            Coming soon
          </p>
        </div>
      </div>
    </main>
  )
}
