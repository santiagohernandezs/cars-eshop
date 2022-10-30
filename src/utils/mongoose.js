import mongoose from 'mongoose'

// code to force database connection

const conn = {
    isConnected: false
}

export function dbConnection() {

    if (conn.isConnected) return

    /*
    async database connection handled with promises, if the connection was successfull show 'Database connected successfully'
    in other case shows an error and close the connection
    */

    mongoose.connect(process.env.MONGODB_URI_CONNECTION, { useNewUrlParser: true }) //mongodb connection uri and paramaters
        .then(() => {
            console.log('Database connected successfully')
        })
        .catch(err => {
            console.error(err)
            mongoose.connection.close()
        })
}
