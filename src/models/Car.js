import { model, models, Schema } from 'mongoose'

// macking car schema

const carSchema = new Schema({
    name: String,
    location: String,
    price: Number,
    description: String,
    image: String,
    details: {
        odometer: Number,
        age: String,
        bodyStyle: String,
        color: String,
        engineType: String,
        cylinders: Number,
        transmission: String,
        fuel: String,
        highlights: String,
        owners: Number,
        wheels: String,
        ac: Boolean,
        interior: String,
        interiorColor: String,
        more: String
    },
    info: {
        createdAt: Date,
        updatedAt: Date,
        createdBy: String
    }
})

// if car model exist export it, if it does not exist create a new one and exportit
// this is for preventing of schema overwriting 

export default models.Car || model('Car', carSchema)