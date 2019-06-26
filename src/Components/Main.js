import React, { Component } from 'react'
import Title from './Title'
import { Route } from 'react-router-dom'
import PhotoWall from './PhotoWall'
import Single from './Single'
import AddPhoto from './AddPhoto'
import { Link } from 'react-router-dom'
import Photo from './Photo'
class Main extends Component {

    state = { loading: true }

    componentDidMount() {
        this.props.requestPosts()
        console.log(2)
    }

    render() {
        return <div>
            <h1>
                <Link to='/'>PhotoWall</Link>
            </h1>
            <Route exact path='/' render={() => {
                console.log("render")
                if (this.props.posts.data) {
                    console.log(this.props)
                    console.log("exist")
                }
                return (
                    <div>
                        {/* Add state to component */}
                        {/* <PhotoWall {...this.props} /> */}
                        <div className="photo-grid">
                            {this.props.posts.data
                                .map((post, index) => <Photo key={index} post={post} {...this.props} index={index} />)}
                        </div>
                    </div>
                )
            }} />

            <Route path='/AddPhoto' render={({ history }) => (
                <AddPhoto {...this.props} onHistory={history} />
            )} />
            {/* params has to be passed after the props to avoid being overrided*/}
            <Route path='/single/:id' render={(params) => (
                <Single loading={this.state.loading} {...this.props} {...params} />
            )} />
        </div >

    }
}

export default Main