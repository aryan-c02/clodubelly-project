import React, { useState } from 'react'
import "./Otp.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledButton, StyledContinueBtn, StyledInput, StyledLabel, StyledHeadingH3 } from "../../styles/GlobalStyles";
import { userVerify } from '../../Services/Apis';
import { NavLink } from 'react-router-dom';
const Otp = () => {

    const [otp, setOtp] = useState();

    const location = useLocation();


    const navigate = useNavigate();

    const handleVerifyOtp = async (e) => {

        e.preventDefault();

        if (!otp) {
            console.log("error, please enter otp in the field");
        }
        else if (otp.length == 4) {

            const data = {
                otp,
                email: location.state,
            }



            const response = await userVerify(data);

            console.log(response);
            if (response.status == 200) {

                await localStorage.setItem("authToken", response.data.userToken);
                navigate("/user/login");

            }


        }
        else {
            console.log("Please enter a 4 digit otp ");
        }

    }


    return (

        <div className='SignIn-Container'>

            <div className='SignIn-rounded-container'>
                <StyledHeadingH3>
                    Log in to your store
                </StyledHeadingH3>



                <form className='SignIn-form'>
                    <StyledInput type="tel" onChange={(e) => setOtp(e.target.value)} placeholder='enter otp' />
                    <StyledContinueBtn onClick={(e) => handleVerifyOtp(e)}>Verify</StyledContinueBtn>
                    <p >Didn't get the code? &nbsp; </p>
                    <NavLink to="/signUp"> See other options</NavLink>

                </form>








            </div >

        </div>
    )
}

export default Otp