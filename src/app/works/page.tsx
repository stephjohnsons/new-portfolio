import TopButton from "@/components/TopButton"
import FlyEasy from "./list/FlyEasy"
import InstagramQuotes from "./list/InstagramQuotes"
import KarlThoene from "./list/KarlThoene"
import Ionic from "./list/Ionic"
import './styles.css'
import '@/app/styles/fonts.css'
import { Box } from "@mui/material"

export default function Works() {
  return (
    <main className="flex min-w-screen flex-row justify-between p-10">
      <div>
        <div className='mb-10'>
          <h1 className="text-4xl font-extrabold">Works</h1>
          <Box className='flex pt-5 space-x-4'>
            <FlyEasy />
            <InstagramQuotes />
          </Box>
          <Box className='flex pt-5 space-x-4'>
            <KarlThoene />
            <Ionic />
          </Box>
        </div>
      </div>
    </main>
  )
}
