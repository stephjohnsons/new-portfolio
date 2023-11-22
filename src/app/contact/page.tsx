import Image from 'next/image'
import Cursor from '@/components/Cursor'
import './styles.css'
import '@/app/styles/fonts.css'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

export default function About() {
  return (
    <main className="flex min-h-screen min-w-screen flex-row justify-between p-24 border">
      <Cursor />
      <div className="basis-1/6 border">
        <WestOutlinedIcon /> Back
      </div>
      <div className="basis-5/6 border">
        <h1 className="text-4xl font-extrabold">Contact</h1>
      </div>
    </main>
  )
}
