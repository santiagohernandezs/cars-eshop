import styles from '@/styles/Card.module.css'
import Image from 'next/image'

export default function Card({ price, age, km, description, location }) {
    return (
        <div className={styles.card} onClick={() => { console.log('click') }}>
            <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
            >
                <div className={styles.card_image}>
                    <Image src="https://http2.mlstatic.com/D_NQ_NP_710949-MLV51905138793_102022-W.webp" alt="carro" height='100%' width='100%' layout='fill' className={styles.image}
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