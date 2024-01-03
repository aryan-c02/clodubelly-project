import User from "../models/User.js";
import UserOtp from "../models/UserOtp.js";
import { generateRandomOtp } from "../utils/generateOtp.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

// email config


const testAccount = await nodemailer.createTestAccount();
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'bernhard93@ethereal.email',
        pass: '6JvDay25W89jjSVkXZ'
    }
});



export const registerUser = async (req, res) => {

    try {
        const { email, phoneNumber, category } = req.body;

        if (!email || !phoneNumber || !category) {
            return res.status(400).json({
                message: "Please provide all details of the user",
            })
        }

        let preUser = await User.findOne({ email });
        if (!preUser) {

            let newUser = new User({
                email, phoneNumber, category,
            });

            const storedData = await newUser.save();

            return res.status(201).json({
                message: "User created successfully",
                storedData,
            })
        }
        else {

            return res.status(400).json({
                message: "User already exists",
            })

        }
    } catch (error) {

        return res.status(400).json({
            message: "Error while registering User",
            error,
        })

    }
}

export const generateOtp = async (req, res) => {

    try {



        const { email, phoneNumber } = req.body;

        if (!email || !phoneNumber) {

            return res.status(400).json({
                message: "Please provide all the details for the otp generation"
            })


        }

        const preUser = await User.findOne({ email });

        if (preUser) {

            const OTP = generateRandomOtp();
            const existEmail = await UserOtp.findOne({ email });

            if (existEmail) {

                const updatedData = await UserOtp.findByIdAndUpdate({ _id: existEmail._id }, {
                    otp: OTP
                }, { new: true });

                await updatedData.save();

                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending OTP for validation",
                    text: `OTP - ${OTP}`
                }

                await transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({
                            message: "email Not send",
                        })
                    }
                    else {
                        console.log("Email send", info.response);
                        res.status(200).json({
                            message: "Email sent successfully",
                        })
                    }
                })

            }
            else {

                const saveOtpData = new UserOtp({
                    email, otp: OTP
                })

                await saveOtpData.save();


                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending OTP for validation",
                    text: `OTP - ${OTP}`
                }

                await transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({
                            message: "email not send",
                        })
                    }
                    else {
                        console.log("Email send", info.response);
                        res.status(200).json({
                            message: "Email sent successfully",
                        })
                    }
                })
            }



        }
        else {

            return res.status(400).json({
                message: "User does not exists",
            })
        }
    }
    catch (error) {

        return res.status(400).json({
            message: "Error while generating OTP",
        })

    }
}


export const validateOTP = async (req, res) => {

    try {

        const { otp, email } = req.body;

        if (!otp || !email) {
            return res.status(400).json({
                message: "Please provide all the details for the otp verification"
            })
        }

        const preUser = await User.findOne({ email });



        if (preUser) {

            const userOtpData = await UserOtp.findOne({ email });

            if (userOtpData.otp == otp) {

                const token = await preUser.generateAuthToken();

                console.log(token);

                return res.status(200).json({
                    message: "OTP verified",
                    userToken: token,
                })
            }
            else {
                return res.status(400).json({
                    message: "Incorrect OTP or no otp generated",
                })
            }

        }
        else {
            return res.status(404).json({
                message: "User not found",
            })
        }



    } catch (error) {

        return res.status(404).json({
            message: "Eror while validating otp",
        })



    }

}


// exports.logout = async function (req, res) {


//     try {

//         const options = {
//             expires: new Date(Date.now()),
//             httpOnly: true,
//         };

       

//          res.status(200).json({
//                 success: true,
//                 message: "logout successfully",
//         })



//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message,
//         })
//     }

// }

