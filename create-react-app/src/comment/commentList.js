import React from 'react'
import Comment from './comment'

class CommentList extends React.Component {
    render() {
        let comments = this.props.data.map(item => {
            return (
                <Comment name={item.name} date={item.date}>
                    {item.text}
                </Comment>
            )
        })

        return (
            <div className="ui comList">
                <span>评论列表</span>
                <Comment name="万郁青" date="五分钟前">
                    沙发沙发
                </Comment>
                <Comment name="eugene" date="八分钟前">
                    写的不错
                </Comment>
                {comments}
            </div>
        )
    }
}

export { CommentList as default }
