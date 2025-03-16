import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log("Connecting to database...");
        
        await mongoose.connect(process.env.MONGO_URI, {

        });
        console.log("Connected");
        
    } catch (error) {
        console.error("Error: ", error.message);
        process.exit(1);
    }
};

export default connectDB;
