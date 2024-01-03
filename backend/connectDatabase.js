import mongoose from "mongoose";

const connectDatabase = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo Db CONNECTED");
    } catch (error) {
        console.log("Failed to connect DB", err);
    }

}

export default connectDatabase;