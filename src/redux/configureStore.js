import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

export function configureStore() {
    return createStore(rootReducer,
        {},
        compose(applyMiddleware(thunk))
    )
}



