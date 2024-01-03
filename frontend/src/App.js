
import './App.css';
import { Routes, Route } from "react-router-dom"
import "./variables.css"
import SignIn from './Pages/SignIn/SignIn.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import Home from './Pages/Home/Home.jsx';
import SelectCategory from './Pages/SelectCategory/SelectCategory.jsx';
import Error from './Pages/Error/Error.jsx';
import Otp from './Pages/Otp/Otp.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.js';
function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/selectCategory" element={<SelectCategory />} />
        <Route path="/user/otp" element={<Otp />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="*" element={<Error />} />


      </Routes>



    </div>
  );
}

export default App;
