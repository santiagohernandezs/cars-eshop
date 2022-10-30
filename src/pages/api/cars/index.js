import Car from '@/models/Car'
import { dbConnection } from '@/utils/mongoose'
import { connection } from 'mongoose'

dbConnection() //importing connection from mongoose.js

export default async function handler(req, res) {

    const { method, body } = req //destructuring req methods
    const { status } = res //destructuring res methods

    //switcher for methods

    switch (method) {
        case 'GET': //get method
            try {
                const car = await Car.find() //function that search in collection by .find() function and assigned to car variable
                return status(200).json(car) // response returned with an status code and a json object with car variable
            } catch (err) {
                return status(404).json({ msg: err.message }) //for errors returns an status code and a json object with an error message
            }
        case 'POST': //post method
            try {
                const newCar = new Car(body) // generate an instance of Car from models and with a body assigned to newcar variable
                const savedCar = await newCar.save() // wait for .save() function and assign to savedCar variable 
                return status(201).json(savedCar)
            } catch (err) {
                return status(400).json({ msg: err.message })
            }
        default:
            return status(400).json({ msg: 'this method is not supported' }) // default response

    }

}