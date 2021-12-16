import axios from "axios";

export const UserSignup = async (user) => {
    return await axios.post("http://localhost:5000/auth/signup", user)
}

export const UserSignin = async (user) => {
    return await axios.post("http://localhost:5000/auth/signin", user)
}