import React, { useState } from 'react'
import "./SignIn.css"
import { StyledButton, StyledContinueBtn, StyledInput, StyledLabel, StyledHeadingH3 } from "../../styles/GlobalStyles";
import { NavLink, useNavigate } from 'react-router-dom';
import { sendOtpFunction } from '../../Services/Apis';


const SignIn = () => {

    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const navigate = useNavigate();


    const handleContinueBtnSignUp = async (e) => {

        e.preventDefault();

        if (!email || !phoneNumber) {
            console.log("error while logging in details not provided")
        }
        else {
            const body = {
                email,
                phoneNumber
            }

            const response = await sendOtpFunction(body);

            if (response.status === 200) {
                setEmail("");
                setPhoneNumber("");
                navigate("/user/otp", {
                    state: email,
                });
            }
        }


    }


    return (
        <div className='SignIn-Container'>

            <div className='SignIn-rounded-container'>
                <StyledHeadingH3>
                    Log in to your store
                </StyledHeadingH3>



                <form className='SignIn-form'>
                    <StyledLabel>E-mail</StyledLabel>
                    <StyledInput className='input-form' type='email' onChange={(e) => setEmail(e.target.value)} placeholder='your e-mail here ...' />
                    <StyledLabel>Mobile Number</StyledLabel>
                    <StyledInput type='tel' onChange={(e) => setPhoneNumber(e.target.value)} placeholder='your mobile number here ...' />
                    <StyledContinueBtn onClick={(e) => handleContinueBtnSignUp(e)}>Continue</StyledContinueBtn>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <p >Don't have an account ? &nbsp; </p>
                        <NavLink to="/signUp"> Sign Up</NavLink>
                    </div>
                </form>

                <StyledButton >

                    Continue with Whatsapp

                </StyledButton >

                <StyledButton className='sign-up-options-btn'>

                    Continue with Google

                </StyledButton>

                {/* <StyledButton className='sign-up-options-btn'>

                    Continue with Facebook

                </StyledButton> */}



            </div>
        </div >
    )
}

export default SignIn