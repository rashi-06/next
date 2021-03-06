/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="h-screen w-screen p-10 dark:bg-black dark:text-white text-black bg-white">
      <Head>
        <title>LetsConnect</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='flex text-3xl text-center justify-center items-center'>Hello from the other side!!!</h1>
      <div className='flex flex-col mx-auto justify-center items-center'>
        <div className='my-10 text-2xl '>Welcome to <span className="text-4xl font-bold">Home</span></div>

        <div className='m-5 p-3'>
          <p className='md:text-2xl'>
          These days my waves get lost in the oceans
          Seven billion swimmers, man I&apos;m going through the motions
          Sent up a flare, I need love and devotion
          Traded for some faces that I never know, notion
          Maybe I should try to find the old me
          Take me to the places and the people that know me
          Tryin&apos; to disconnect, thinking maybe you could show me
          If there&apos;s so many people here, then why am I so lonely?
          </p>
          
        </div>
        <div className='m-2 p-2'>
        <p className='text-2xl'>Can I get a connection?<br/>
          Can I get, can I get a connection?<br/>
          Can I get a connection?<br/>
          Can I get, can I get a connection?</p>
        </div>
        
        {/* <div className='mt-10'>Made with 💗 by Rashi Sharma</div> */}
      </div>
      

    </div>
  )
}
