import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Mongo DB connected successfully");


    } catch (error) {
        console.error("Eror connecting to MongoDB:");
        process.exit(1); //exit process with failure 

    }
}
