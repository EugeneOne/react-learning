import React from 'react'
import CommentList from './commentList'
import CommentForm from './commentForm'
import axios from 'axios'

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [1, 2, 3] }
        axios(this.props.url).then(response => {})
    }
    render() {
        return (
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider" />
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        )
    }
}

export { CommentBox as default }
