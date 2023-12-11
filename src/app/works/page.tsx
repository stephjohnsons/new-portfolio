import TopButton from "@/components/TopButton"
import FlyEasy from "./list/FlyEasy"
import InstagramQuotes from "./list/InstagramQuotes"
import KarlThoene from "./list/KarlThoene"
import Ionic from "./list/Ionic"
import Calculator from "./list/Calculator"
import './styles.css'
import '@/app/styles/fonts.css'
import { Box } from "@mui/material"
import Link from "next/link"

export default function Works() {
  return (
    <main className="flex min-w-screen flex-row justify-between p-10">
      <Box>
        <Box className='mb-10'>
          <h1 className="text-4xl font-extrabold">Works</h1>
          <Box className='flex pt-2 space-x-2'>
            <Link href="../../../../page/flyeasy"><FlyEasy /></Link>
            <Link href="../../../../page/quotes"><InstagramQuotes /></Link>
          </Box>
          <Box className='flex pt-2 space-x-2'>
            <Link href="https://www.karlthoene.com"><KarlThoene /></Link>
            <Link href="../../../../page/ionic"><Ionic /></Link>
          </Box>
          <Box className='flex pt-2 space-x-2'>
            <Link href="../../../../page/calculator"><Calculator /></Link>
          </Box>
        </Box>
      </Box>
    </main>
  )
}
