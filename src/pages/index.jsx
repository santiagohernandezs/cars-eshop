import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {

  //border-2 border-sky-500
  const [carInfo, setCarInfo] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/cars')
      .then(res => res.json())
      .then(data => {
        setCarInfo(data)
      })
  }, [])

  return (
    <div>
      <Head>
        <title>Carros</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <h1 className='text-[2rem] font-bold text-[#272343] mb-10 text-center'>Carros y Camionetas</h1>

      <main className='flex justify-center'>
        {/* {tasks.map(task => <Card key={_id} {...task} handleModal={setOpenModal} />)} */}
        <div className='grid grid-cols-main gap-[2.8rem] w-fit min-h-[50rem] bg-[#e3f6f5] justify-center mx-4 p-9 rounded-xl'>
          {carInfo && carInfo.map(car => <Card key={car._id} {...car} />)}
        </div>
      </main>
    </div>
  )
}
