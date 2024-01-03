import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please enter a email"],
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please enter a Phone Number"],
    },
    category: {
        type: String,
    },
    password: {
        type: String,
        minlength: 6,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]






}, {
    timestamps: true,
});


UserSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
})

UserSchema.methods.generateAuthToken = async function () {



    try {

        const newtoken = jwt.sign({ _id: this._id }, "12334dclncsdhc", {
            expiresIn: "1d"
        });



        this.tokens = await this.tokens.concat({
            token: newtoken,
        })

        await this.save();

        return newtoken;

    } catch (error) {

        console.log("error while generating jwt token");

    }
}


const User = mongoose.model("User", UserSchema);
``
export default User;