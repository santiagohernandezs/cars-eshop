import styles from '@/styles/Card.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Card({ image, price, age, km, description, location }) {

    return (
        <div className={styles.card}>
            <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
            >
                <div className={styles.card_image}>
                    <Image src={image} alt="carro" height='100%' width='100%' layout='fill' className={styles.image}
                    />
                </div>
            </a>
            <div className={styles.card_text}>
                <div className={styles.card_price}>
                    <h2>${price}</h2>
                </div>
                <div className={styles.card_specs}>
                    <span>{age} | {km}km</span>
                </div>
                <div className={styles.card_description}>
                    <span>{description}</span>
                </div>
                <div className={styles.card_location}>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    )
}