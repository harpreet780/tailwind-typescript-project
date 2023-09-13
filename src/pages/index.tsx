import Head from 'next/head';
import Home from './home';
import Landing from './landing/landing';

export default function Home() {
  return (
    <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght400;700;900&display=swap" rel="stylesheet" />
    </Head>
      <Landing/>
    </>
  )
}
