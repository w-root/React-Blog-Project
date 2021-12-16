import { combineReducers } from "redux";
import postReducer from './postReducer'
import tagReducer from './tagReducer'

const rootReducer = combineReducers({
    postReducer,
    tagReducer
})

export default rootReducer