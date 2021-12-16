import * as types from './types'
import * as services from '../../services/PostService'

export const fetchPosts = async (dispatch) => {
    try {
        const { data } = await services.getAllPosts()
        dispatch(getPosts(data))
    } catch (error) {
        console.log(error)
    }
}
export const getPosts = (posts) => {
    return {
        type: types.GET_POSTS,
        payload: posts
    }
}

export const getPostByTag = (tag) => {
    return {
        type: types.GET_POST_BY_TAG,
        payload: tag
    }
}

export const fetchAddPost = (post) => async (dispatch) => {
    try {
        const { data } = await services.addPost(post)
        dispatch(addPost(data))
    } catch (error) {
        console.log(error)
    }
}

export const addPost = (data) => {
    return {
        type: types.ADD_POST,
        payload: data
    }
}