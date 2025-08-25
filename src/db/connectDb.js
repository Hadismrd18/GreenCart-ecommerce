import mongoose from "mongoose";

let isConnected = false

export default async function connectDb(params) {
    if (isConnected) return
    try {
        const connect  = await mongoose.connect(process.env.MONGO_URI)
        isConnected = true
        console.log("successfully connected to database")
    } catch (err) {
        console.log("an error occurred when connecting to database")
    }
}