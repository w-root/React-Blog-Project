import * as types from '../actions/types'
const initialState = {
    tags: []
}

export default function tagReducer(state = initialState.tags, action) {
    switch (action.type) {
        case types.GET_TAGS:
            return action.payload
        case types.ADD_TAG:
            return state
        default:
            return state;
    }
}