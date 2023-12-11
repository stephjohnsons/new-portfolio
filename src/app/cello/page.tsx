
import TopButton from "@/components/TopButton"
import './styles.css'
import '@/app/styles/fonts.css'
import { Box } from "@mui/material";

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
            <Box>
        <Box className='mb-10'>
          <h1 className="text-4xl font-extrabold">Cello</h1>
          <p className='pt-5 pe-10'>
          <p>
            “...an avid storyteller... A formidable cellist..." -- Benjamin Zander
          </p>
          <p>
            Stephen has performed extensively and internationally across 3 continents as a cellist. 
            He was the recipient of two chamber music awards, namely at the 
            Festival des Arcs in France, and the Ipoh Music Festival, 
            and an alumnus of the Scandinavian Cello School and UCSI Institute of Music. <br /><br />
            A native of Kota Kinabalu, he has performed with the American Festival, 
            the International Philharmonic Youth Orchestra, and the National Symphony 
            Orchestra of Malaysia, among many others. Having studied and attended masterclasses 
            with cellists Julie Dessureault, Asier Polo, Jacob Shaw, Leonid Shukaev, Thomas Duran, 
            Thomas Loewenheim, and the late Alexander Buzlov, Stephen was greatly influenced 
            to be a great enthusiast of various genres and soundscapes. <br /><br />
            His 2022 season featured concerts with the Denver Philharmonic and 
            the Chor der Bayerische Philharmonie at the Herkulessaal in Munich, Germany; 
            Disney in Concert 2022 (Malaysia); a concert tour with Lay Zhang in Singapore and Malaysia; 
            cello-bass recital with Giacomo Banella; as well as his engagement with the big band 
            Tarakucha! featuring singers Sean Ghazi and Ida Mariana. <br /><br />
            Notable projects in 2023 will include his engagement at the 
            Mas Palou Artist Residency 2023, Spain, curating interdisciplinary artistic projects 
            with German pianist Daniel Bucurescu, Disney in Concert 2023, as well as tours with 
            his piano trio (Jonathan Kuo, Giovani Biga) and piano quintet (P’ng Tean Hwa, 
            Lee Sing Hong, Wani Ismail, Cheryl Choi) in Malaysia and Indonesia. 
            As a performer, he favours creative communications between artistic hive minds to generate exhilarating experiences for attending audiences. Stephen is currently the chairperson for Kamerata Kuala Lumpur and is an adjunct lecturer at both UCSI Institute of Music and Sunway University. <br /><br />
            Stephen performs on a 2014 Han Zhao-sheng cello.
          </p>
          <br /><br />
          </p>
        </Box>
      </Box>
    </main>
  )
}
