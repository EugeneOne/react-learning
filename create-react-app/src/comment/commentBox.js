import React from 'react'
import CommentList from './commentList'
import CommentForm from './commentForm'

class CommentBox extends React.Component {
    render() {
        return (
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider" />
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        )
    }
}

export { CommentBox as default }
