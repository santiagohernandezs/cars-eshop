import { model, models, Schema } from 'mongoose'

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

export default models.Car || model('Car', carSchema)