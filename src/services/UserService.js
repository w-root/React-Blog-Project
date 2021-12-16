import axios from "axios";
import jwtDecode from "jwt-decode";


export const GetUserDetails = async () => {
    const { id } = jwtDecode(localStorage.getItem("token"))
    const user = await axios.post("http://localhost:5000/user/getUserDetails", { id })
    return user.data
}

export const GetUserId = () => {
    const { id } = jwtDecode(localStorage.getItem("token"))
    return id
}

export const UpdateUser = async (user) => {
    return await axios.post("http://localhost:5000/user/updateUser", user)
}

export const DeleteUser = async (id) => {

    return await axios.post("http://localhost:5000/user/deleteUser", { id })
}