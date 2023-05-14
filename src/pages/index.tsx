import Header from '@/components/Header/Header'
import MainComponent from '@/components/MainComponent.tsx/MainComponent'
import Sidebar from '@/components/Sidebar/Sidebar'
import { Grid, Box, useMediaQuery } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  const [isSmallerThanPhone] = useMediaQuery("(max-width: 480px)");

  return (
    <>
      <Head>
        <title>Main page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Header />
      <Grid templateColumns={isSmallerThanPhone ? "1fr" : "2fr 8fr"} className="pl-10 pt-3 pr-10"  >
        <Sidebar />
        <MainComponent />
      </Grid>
      </Box>
    </>
  )
}