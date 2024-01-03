import React, { useState } from 'react'
import { StyledButton, StyledContinueBtn, StyledInput, StyledLabel, StyledHeadingH3 } from "../../styles/GlobalStyles";
import "./SignUp.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { registerFunction } from '../../Services/Apis';


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [category, setCategory] = useState("");

    const navigate = useNavigate();

    const handleRegisterBtn = async (e) => {
        e.preventDefault();
        if (!email || !phoneNumber || !category) {
            console.log("Error while registering User details not provided");
        }
        else {
            let body = {
                email, phoneNumber, category,
            }
            const response = await registerFunction(body);
            console.log(response);
            if (response.status == 201) {
                setEmail("");
                setCategory("");
                setPhoneNumber(null);
                navigate("/signIn");

            }

        }

    }
    return (
        <div className='SignUp-Container'>

            <div className='SignUp-rounded-container'>

                <StyledHeadingH3>
                    Get Started
                </StyledHeadingH3>


                <form className='SignUp-form'>
                    <StyledLabel>E-mail</StyledLabel>
                    <StyledInput className='input-form' type='email' onChange={(e) => setEmail(e.target.value)} placeholder='your e-mail here ...' />
                    <StyledLabel>Mobile Number</StyledLabel>
                    <StyledInput type='tel' onChange={(e) => setPhoneNumber(e.target.value)} placeholder='your mobile number here ...' />
                    <StyledLabel>Tell us more about you</StyledLabel>
                    <StyledInput type='text' onChange={(e) => setCategory(e.target.value)} placeholder='Select from drop down ' />
                    <StyledContinueBtn onClick={(e) => handleRegisterBtn(e)}>Continue</StyledContinueBtn>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <p >Already have an account ? &nbsp; </p>
                        <NavLink to="/signIn"> Sign In</NavLink>
                    </div>
                </form>






                <StyledButton >

                    Continue with Whatsapp

                </StyledButton >

                <StyledButton className='sign-up-options-btn'>

                    Continue with Google

                </StyledButton>


                {/* 
                <StyledButton className='sign-up-options-btn'>

                    Continue with Facebook

                </StyledButton> */}





            </div>

        </div>
    )
}

export default SignUp