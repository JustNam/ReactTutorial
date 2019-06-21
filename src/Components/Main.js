import React, { Component } from 'react'
import Title from './Title'
import { Route } from 'react-router-dom'
import PhotoWall from './PhotoWall'
import Single from './Single'
import AddPhoto from './AddPhoto'
import { Link } from 'react-router-dom'

class Main extends Component {

    state = {loading: true}

    componentDidMount(){
        // prevent reloading from getting errors, when reloading, the components have not been loaded yet
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }

    render() {
     
        return <div>
            <h1>
                <Link to='/'>PhotoWall</Link>
            </h1>
            <Route exact path='/' render={() => (
                <div>
                    {/* Add state to component */}
                    <PhotoWall {...this.props} />
                </div>
            )} />

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