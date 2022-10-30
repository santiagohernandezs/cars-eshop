import styles from '@/styles/Card.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Card({ image, price, age, km, description, location, _id }) {

    const router = useRouter()

    return (
        <div className='bg-white w-[17.75rem] h-[23.81rem] transition drop-shadow-none rounded-lg cursor-pointer text-[#272343] hover:drop-shadow-2xl duration-300' onClick={() => router.push(`/cars/${_id}`)}>
            <a
                href="#"
            >
                <div className='h-[13.09rem] w-[17.75rem] relative'>
                    <Image src={image} alt="carro" height='100%' width='100%' layout='fill' className='rounded-t-lg' />
                </div>
            </a>
            <div className='flex flex-col justify-around p-3 h-[45%] '>
                <div className='text-2xl font-bold'>
                    <h2>${price}</h2>
                </div>
                <div className='text-sm -mt-5'>
                    <span>{age} | {km}km</span>
                </div>
                <div>
                    <span>{description}</span>
                </div>
                <div className='text-gray-400'>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    )
}