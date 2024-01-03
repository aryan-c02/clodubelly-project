import mongoose from "mongoose";

const UserOtpSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    otp: {
        type: Number,
        required: true,
    }

}, {
    timestamps: true,
});


const UserOtp = mongoose.model("userOtps", UserOtpSchema);

export default UserOtp; 