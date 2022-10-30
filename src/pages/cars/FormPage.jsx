import styles from '@/styles/FormPage.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const stringFormat = yup.string().required()
const numberFormat = yup.number().integer().positive().required()

const schema = yup.object({
    name: stringFormat,
    description: stringFormat,
    price: numberFormat,
    age: numberFormat,
    km: numberFormat,
    location: stringFormat,
    more: stringFormat,
    image: stringFormat
}).required()

export default function FormPage() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const [newCar, setNewCar] = useState({
        name: '',
        description: '',
        price: 0,
        age: '',
        km: 0,
        location: '',
        more: '',
        image: ''
    })

    const createCar = async () => {
        try {
            await fetch('http://localhost:3000/api/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCar)
            })
        } catch (err) {
            console.log(err)
        }
    }

    const router = useRouter()

    const handleSubmitForm = async () => {
        console.log('submiting...')
        await createCar()
        console.log('submited')
        await router.push('/')
    }

    const handleChange = e => {
        setNewCar({ ...newCar, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.main}>
            <div className='bg-white p-8 rounded-lg w-3/12'>
                <h1>he</h1>
            </div>
            <div className='p-8 bg-white rounded-lg w-8/12'>
                <form className='flex flex-col h-auto gap-4'>
                    <div className='relative w-full flex flex-col gap-5 h-19'>
                        <label className='text-xl -mt-2'>Nombre</label>
                        <input className={errors.name
                            ? 'text-base -mt-4 p-2 outline outline-red-500 border-0 bg-[#f5f5f5] rounded-lg'
                            : 'text-base -mt-4 p-2 outline-0 border-0 bg-[#f5f5f5] rounded-lg'}
                            {...register('name')} type="text" placeholder="Name" name="name" onChange={handleChange} />
                        <span className='text-red-500 absolute bottom-[-10px] text-sm -mt-4 block '>{errors.name?.message}</span>
                    </div>
                    <div className='relative w-full flex flex-col gap-5 h-19'>
                        <label className='text-xl -mt-2'>Description</label>
                        <input className={errors.name
                            ? 'text-base -mt-4 p-2 outline outline-red-500 border-0 bg-[#f5f5f5] rounded-lg'
                            : 'text-base -mt-4 p-2 outline-0 border-0 bg-[#f5f5f5] rounded-lg'}
                            {...register('description')} type="text" placeholder="Description" name="description" onChange={handleChange} />
                        <span className='text-red-500 text-sm -mt-4 block'>{errors.description?.message}</span>
                    </div>
                    <div className='relative w-full flex flex-col gap-5 h-19'>
                        <label className='text-xl -mt-2'>Precio</label>
                        <input className={errors.name
                            ? 'text-base -mt-4 p-2 outline outline-red-500 border-0 bg-[#f5f5f5] rounded-lg'
                            : 'text-base -mt-4 p-2 outline-0 border-0 bg-[#f5f5f5] rounded-lg'}
                            {...register('price')} type="text" placeholder="500000" name="price" onChange={handleChange} />
                        <span className='text-red-500 text-sm -mt-4 block'>{errors.price?.message}</span>
                    </div>
                    <div className='relative w-full flex flex-col gap-5 h-19'>
                        <label className='text-xl -mt-2'>Año</label>
                        <input className={errors.name
                            ? 'text-base -mt-4 p-2 outline outline-red-500 border-0 bg-[#f5f5f5] rounded-lg'
                            : 'text-base -mt-4 p-2 outline-0 border-0 bg-[#f5f5f5] rounded-lg'}
                            {...register('age')} type="text" placeholder="1916" name="age" onChange={handleChange} />
                        <span className='text-red-500 text-sm -mt-4 block'>{errors.age?.message}</span>
                    </div>
                    <div className='relative w-full flex flex-col gap-5 h-19'>
                        <label className='text-xl -mt-2'>Km</label>
                        <input className={errors.name
                            ? 'text-base -mt-4 p-2 outline outline-red-500 border-0 bg-[#f5f5f5] rounded-lg'
                            : 'text-base -mt-4 p-2 outline-0 border-0 bg-[#f5f5f5] rounded-lg'}
                            {...register('km')} type="text" placeholder="20000" name="km" onChange={handleChange} />
                        <span className='text-red-500 text-sm -mt-4 block'>{errors.km?.message}</span>
                    </div>
                    <div className='relative w-full flex flex-col gap-5 h-19'>
                        <label className='text-xl -mt-2'>Ubicación</label>
                        <input className={errors.name
                            ? 'text-base -mt-4 p-2 outline outline-red-500 border-0 bg-[#f5f5f5] rounded-lg'
                            : 'text-base -mt-4 p-2 outline-0 border-0 bg-[#f5f5f5] rounded-lg'}
                            {...register('location')} type="text" placeholder="Miranda - Caracas" name="location" onChange={handleChange} />
                        <span className='text-red-500 text-sm -mt-4 block'>{errors.location?.message}</span>
                    </div>
                    <div className='relative w-full flex flex-col gap-5 h-19'>
                        <label className='text-xl -mt-2'>Detalles</label>
                        <input className={errors.name
                            ? 'text-base -mt-4 p-2 outline outline-red-500 border-0 bg-[#f5f5f5] rounded-lg'
                            : 'text-base -mt-4 p-2 outline-0 border-0 bg-[#f5f5f5] rounded-lg'}
                            {...register('more')} type="text" name="more" onChange={handleChange} />
                        <span className='text-red-500 text-sm -mt-4 block'>{errors.more?.message}</span>
                    </div>
                    <div className='relative w-full flex flex-col gap-5 h-19'>
                        <label className='text-xl -mt-2'>Imagen</label>
                        <input className={errors.name
                            ? 'text-base w-full -mt-4 p-2 outline outline-red-500 border-0 bg-[#f5f5f5] rounded-lg'
                            : 'text-base w-full -mt-4 p-2 outline-0 border-0 bg-[#f5f5f5] rounded-lg file'}
                            {...register('image')} type="text" name="image" onChange={handleChange} />
                        <span className='text-red-500 text-sm -mt-4 block'>{errors.image?.message}</span>
                    </div>
                    <div className={styles.control}>
                        <button onClick={handleSubmit(handleSubmitForm)}>Crear</button>
                    </div>
                </form>
            </div >
        </div >
    )
}
