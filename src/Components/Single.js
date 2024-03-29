import React, { Component } from 'react'
import Photo from './Photo'
import Comment from './Comment'

class Single extends Component {
    render() {
        const { match, posts } = this.props
        // the passed parameter is string
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[id] || []
        const index = this.props.posts.findIndex((post) => post.id === id)
        if (this.props.loading === true) {
            return <div className="loader"> ...loading </div>
        } else if (post){
            return <div className='single-photo'>
                <Photo post={post} {...this.props} index={index} />
                <Comment startAddingComment={this.props.startAddingComment} comments={comments} id={id} />
            </div>
        } else {
            return <h1> ...no post found </h1>
        }
    }
}

export default Single