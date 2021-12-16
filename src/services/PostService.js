import axios from "axios";
import { GetUserId } from "./UserService";

export const getAllPosts = async () => {
    return await axios.get("http://localhost:5000/posts")
}

export const addPost = async (post) => {
    const id = await GetUserId()
    return axios.post("http://localhost:5000/posts/new-post", { post, id })
}

export const getPost = async (slug) => {
    return await axios.get(`http://localhost:5000/posts/${slug}`)
}

export const getPostTags = async () => {
    return await axios.get("http://localhost:5000/posts/getPostTags")
}

export const getUserPosts = async (id) => {
    return await axios.get(`http://localhost:5000/posts/getUserPosts/${id}`)
}

export const getUserPostsByUsername = async (username) => {
    return await axios.get(`http://localhost:5000/posts/getUserPostsByUsername/${username}`)
}