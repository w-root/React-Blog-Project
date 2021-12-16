import * as types from '../actions/types'

const initialState = {
    posts: []
}
const currentState = {
    posts: [],
    filteredPosts: []
}

export default function postReducer(state = initialState.posts, action) {
    switch (action.type) {
        case types.GET_POSTS:
            currentState.posts = action.payload
            return action.payload
        case types.ADD_POST:
            return state
        case types.GET_POST_BY_TAG:      //19.satır : burada bunu yapmamın sebebi postları filtreledikten sonra tekrar filtrelerse bu sefer bütün postları almayacak.
            state = currentState.posts //filtrelenmiş postların içinden yeni filtreyi arayacağı için state i ilk haline getiriyoruz...
            for (let i = 0; i < currentState.posts.length; i++) {
                for (let j = 0; j < currentState.posts[i].tags.length; j++) {  //Burdaki döngüler, postların tag leri veritabanında dizi olarak
                    if (currentState.posts[i].tags[j].name === action.payload.name) //tutulduğu için filtrelenen tag ile tüm postları ve postların 
                        currentState.filteredPosts.push(currentState.posts[i]);    // taglerini gezip varmı diye bakıp var olanları filteredPosts dizisine 
                }                                                                      //atıp onuda state eşitleyip döndürüyor.
            }
            state = currentState.filteredPosts
            currentState.filteredPosts = []
            return state
        default:
            return state;
    }
}