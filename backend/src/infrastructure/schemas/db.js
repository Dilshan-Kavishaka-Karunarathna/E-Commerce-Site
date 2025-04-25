import mongoose from "mongoose";

export const connectDB = async ()=> {
    try{
        const connectionString = "mongodb+srv://dilshankavishka667:3Matb7DPYpJr65wd@cluster0.pdmsgxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(connectionString);
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log("error");
        console.log("cant connect to MongoDB");
    }

    };
