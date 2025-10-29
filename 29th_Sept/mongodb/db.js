import mongoose from "mongoose";

export const connectDB = async(req,res)=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MONGODB CONNECTED SUCCESSFULL");
        
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED !", error);
    }
}