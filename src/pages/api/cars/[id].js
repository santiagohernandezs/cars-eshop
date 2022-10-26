import Car from '@/models/Car'
import { dbConnection } from '@/utils/mongoose'

export default async (req, res) => {

    const { method, body, query: { id } } = req
    const { status } = res

    switch (method) {
        case 'GET':
            try {
                const car = await Car.findById(id)
                if (!car) return status(404).json({ msg: 'This car can not be found' })
                return status(200).json(car)
            } catch (error) {
                return status(500).json({ msg: error.message })
            }
        case 'UPDATE':
            try {
                const updatedCar = await Car.findByIdAndUpdate(id, body, {
                    new: true
                })
                if (!updatedCar) return status(404).json({ msg: 'This car can not be found' })
                return status(200).json(updatedCar)
            } catch (error) {
                return status(500).json({ msg: error.message })
            }
        case 'DELETE':
            try {
                const deletedCar = await Car.findByIdAndDelete(id)
                if (!deletedCar) return status(404).json({ msg: 'This car can not be found' })
                return status(204).json({ msg: 'Car deleted' })
            } catch (error) {
                return status(400).json({ msg: error.message })
            }
        default:
            return status(400).json('This methos is not supported')
    }
}