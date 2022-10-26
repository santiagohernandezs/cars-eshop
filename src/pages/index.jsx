import Card from '@/components/Card'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {


  const [carInfo, setCarInfo] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/cars')
      .then(res => res.json())
      .then(data => {
        setCarInfo(data)
      })
  }, [])

  return (
    <div className={styles.app}>
      <Head>
        <title>Carros</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* {tasks.map(task => <Card key={_id} {...task} handleModal={setOpenModal} />)} */}
        {carInfo && carInfo.map(car => <Card key={car._id} {...car} />)}
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
