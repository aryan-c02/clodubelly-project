import React from 'react'
import './LoginPage.css'
import ProfilerHeader from '../../Components/ProfileHeader/ProfileHeader.jsx'
import ProfilePostComponent from '../../Components/ProfilePostComponent/ProfilePostComponent.jsx'

const LoginPage = () => {
    return (
        <div className='LoginPageContainer'>

            <ProfilerHeader />
            <ProfilePostComponent />
        </div>
    )
}

export default LoginPage