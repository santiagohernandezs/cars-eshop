import { model, models, Schema } from 'mongoose'

// macking car schema

const carSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    age: String,
    km: Number,
    location: String,
    more: String,
    image: String
})

// if car model exist export it, if it does not exist create a new one and exportit
// this is for preventing of schema overwriting 

export default models.Car || model('Car', carSchema)