import Cursor from '@/components/Cursor'
import BackButton from "@/components/BackButton"
import './styles.css'
import '@/app/styles/fonts.css'

export default function About() {
  return (
    <main className="flex min-h-screen min-w-screen flex-row justify-between p-24 border">
      {/* <Cursor /> */}
      <div className="basis-1/6">
        <BackButton />
      </div>
      <div className="basis-5/6">
        <h1 className="text-4xl font-extrabold">Contact</h1>
        <div className='flex flex-row'>
          <div className='basis-1/6 border min-h-full'>
            Email
            LinkedIn
            GitHub
            Resume
          </div>
          <div className='basis-5/6 border min-h-full'>
            info@stephjohnsons.com
            Stephen Tseu
            @stephjohnsons
            click here
          </div>
        </div>
      </div>
    </main>
  )
}
