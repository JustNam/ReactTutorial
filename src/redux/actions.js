import {database} from '../database/config'

export function startAddingPost(post) {
    //  dispatch is provided internally
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(()=>{
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPost(){
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot)=> {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPost(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startRemovingPost(index, id){
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(()=>{
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingComment(comment, postId){
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(()=> {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingComments(){
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot)=> {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function loadComments(comments){
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function removePost(index){
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post){
    return {
        type: 'ADD_POST',
        post 
    }
}

export function addComment(comment, postId){
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPost(posts){
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

// New actions for middleware
export function requestPosts(){
    return {
        type: 'REQUEST_POSTS',
        promise: database.ref('posts').once('value')
    }
}

export function loadPostProcessing(){
    return {
        type: 'LOAD_POSTS_PROCESSING'
    }
}

export function loadPostSuccess(result){
    return {
        type: 'LOAD_POSTS_SUCCESS',
        result,
    }
}

export function loadPostfailure(error){
    return {
        type: 'LOAD_POSTS_FAILURE',
        error,
    }
}