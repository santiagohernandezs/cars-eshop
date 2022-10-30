import Car from '@/models/Car'
import { dbConnection } from '@/utils/mongoose'
import { connection } from 'mongoose'

dbConnection()

export default async (req, res) => {

    const { method, body, query: { id } } = req //destructuring req methods
    const { status } = res //destructuring res methods

    /* switcher for method for an specific id (car) */

    switch (method) {
        case 'GET': //get method
            try {
                const car = await Car.findById(id) //.findById() => fucntion that search a item based in its id
                if (!car) return status(404).json({ msg: 'This car can not be found' }) // if no car return a response with status code an a message
                return status(200).json(car)
            } catch (error) {
                return status(500).json({ msg: error.message })
            }
        case 'UPDATE': //update method
            try {
                const updatedCar = await Car.findByIdAndUpdate(id, body, { //.findByIdAndUpdate() => function that search a item based in its id and update it
                    new: true //for returning the updated version of the item
                })
                if (!updatedCar) return status(404).json({ msg: 'This car can not be found' }) // if no car return a response with status code an a message
                return status(200).json(updatedCar)
            } catch (error) {
                return status(500).json({ msg: error.message })
            }
        case 'DELETE': //delete method
            try {
                const deletedCar = await Car.findByIdAndDelete(id) //.findByIdAndDelete() => function that search a item based in its id and delete it
                if (!deletedCar) return status(404).json({ msg: 'This car can not be found' }) // if no car return a response with status code an a message
                return status(204).json({ msg: 'Car deleted' })
            } catch (error) {
                return status(400).json({ msg: error.message })
            }
        default:
            return status(400).json('This methos is not supported') // default response
    }
}