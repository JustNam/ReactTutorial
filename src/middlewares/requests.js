import * as actionCreator from '../redux/actions'

export const loadPostsMiddleware = dispatch => next => action => {
    if (!action.promise) return next(action)
    next(actionCreator.loadPostProcessing())
    action.promise
        .then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            return next(actionCreator.loadPostSuccess(posts))
        })
        .catch(error => next(
            actionCreator.loadPostfailure(error)
        ))
}