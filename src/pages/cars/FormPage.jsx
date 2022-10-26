import styles from '@/styles/FormPage.module.css'
import { useState } from 'react'

export default function FormPage() {

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

    /*
        {
        name: String,
        description: String,
        price: Number,
        age: String,
        km: Number,
        location: String,
        more: String,
        img: String
        }
    */

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

    const handleSubmit = async e => {
        e.preventDefault()
        console.log('submiting...')
        await createCar()
        console.log('submited')
    }

    const handleChange = e => setNewCar({ ...newCar, [e.target.name]: e.target.value })

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <label className={styles.label}>Nombre</label>
                    <input className={styles.input} type="text" placeholder="Name" name="name" onChange={handleChange} />
                    <label className={styles.label}>Description</label>
                    <input className={styles.input} type="text" placeholder="Description" name="description" onChange={handleChange} />
                    <label className={styles.label}>Precio</label>
                    <input className={styles.input} type="text" placeholder="500000" name="price" onChange={handleChange} />
                    <label className={styles.label}>Año</label>
                    <input className={styles.input} type="text" placeholder="2016" name="age" onChange={handleChange} />
                    <label className={styles.label}>Km</label>
                    <input className={styles.input} type="text" placeholder="20000" name="km" onChange={handleChange} />
                    <label className={styles.label}>Ubicación</label>
                    <input className={styles.input} type="text" placeholder="Miranda - Caracas" name="location" onChange={handleChange} />
                    <label className={styles.label}>Detalles</label>
                    <input className={styles.input} type="text" name="more" onChange={handleChange} />
                    <label className={styles.label}>Imagen</label>
                    <input className={styles.input} type="text" name="image" onChange={handleChange} />
                    <div className={styles.control}>
                        <button onClick={handleSubmit}>Crear</button>
                    </div>
                </form>
            </div>
        </div >
    )
}
