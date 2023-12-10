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
      <Box>
        <Box className='mb-10'>
          <h1 className="text-4xl font-extrabold">Works</h1>
          <Box className='flex pt-2 space-x-2'>
            <FlyEasy />
            <InstagramQuotes />
          </Box>
          <Box className='flex pt-2 space-x-2'>
            <KarlThoene />
            <Ionic />
          </Box>
        </Box>
      </Box>
    </main>
  )
}
