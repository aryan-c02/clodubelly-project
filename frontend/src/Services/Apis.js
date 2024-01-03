import { commonRequest } from "./ApiCall";
import { BACKEND_URL } from "./helper";

export const registerFunction = async (data) => {
    return await commonRequest("POST", `${BACKEND_URL}/register`, data);
}

export const sendOtpFunction = async (data) => {
    return await commonRequest("POST", `${BACKEND_URL}/generateOtp`, data);
}


export const userVerify = async (data) => {
    return await commonRequest("POST", `${BACKEND_URL}/validateOtp`, data);
}
