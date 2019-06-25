import initalPostState from '../data/posts'
import {combineReducers} from 'redux'

const initialState = {}
// after an action, every reducer is checked
function comments(state = {}, action){
    switch(action.type){
        //  es6 to create new pair 
        case 'ADD_COMMENT': 
        if (!state[action.postId]){
            return {...state, [action.postId]: [action.comment]}
        } else {
            return {...state, [action.postId]: [...state[action.postId], action.comment]}
        }
        case 'LOAD_COMMENTS': return action.comments
        default: return state
    }
}
// update state posts
function posts(state = initalPostState, action){
    // console.log(state)
    switch(action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [...state, action.post]
        case 'LOAD_POSTS': return action.posts

        case 'LOAD_POSTS_PROCESSING': 
            return {
                ...state,
                isLoading: true
            }
        case 'LOAD_POSTS_SUCCESS': return {
            ...state,
            data: action.result,
            isLoading: false
        }
        case 'LOAD_POSTS_FAILURE': return {
            ...state,
            error: action.error,
            isLoading: false
        }
        default: return state
    }
}

const rootReducer = combineReducers({comments, posts})

export default rootReducer