import mongoose from 'mongoose'

const conn = {
    isConnected: false
}

export function dbConnection() {

    if (conn.isConnected) return

    mongoose.connect(process.env.MONGODB_URI_CONNECTION, { useNewUrlParser: true })
        .then(() => {
            console.log('Database connected successfully')
        })
        .catch(err => {
            console.error(err)
            mongoose.connection.close()
        })
}
