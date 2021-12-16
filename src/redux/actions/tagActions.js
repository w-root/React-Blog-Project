import * as types from './types'
import * as services from '../../services/TagService'

export const fetchTags = async (dispatch) => {
    try {
        const { data } = await services.getAllTags()
        dispatch(getTags(data))
    } catch (error) {
        console.log(error)
    }
}
export const getTags = (tags) => {
    return {
        type: types.GET_TAGS,
        payload: tags
    }
}

export const fetchAddTag = (tag) => async (dispatch) => {
    try {
        const { data } = await services.addTag(tag)
        dispatch(addTag(data))
    } catch (error) {
        console.log(error)
    }
}
export const addTag = (data) => {
    return {
        type: types.ADD_TAG,
        payload: data
    }
}