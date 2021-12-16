import axios from "axios";

export const getAllTags = async () => {
    return await axios.get("http://localhost:5000/tag")
}


export const addTag = async (tag) => {
    return await axios.post("http://localhost:5000/tag/add", tag)
}
