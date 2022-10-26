import Car from '@/models/Car'
import { dbConnection } from '@/utils/mongoose'

dbConnection()

export default async function handler(req, res) {

    const { method, body } = req
    const { status } = res

    switch (method) {
        case 'GET':
            const car = await Car.find()
            return status(200).json(car)
        case 'POST':
            const newCar = new Car(body)
            const savedCar = await newCar.save()
            return status(201).json(savedCar)

        default:
            return status(400).json({ msg: 'this method is not supported' })

    }

}