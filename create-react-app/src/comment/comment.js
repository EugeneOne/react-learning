import React from 'react'

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="commentItem">姓名：{this.props.name}</div>
                <div className="commentItem">时间：{this.props.date}</div>
                <div className="commentItem">内容：{this.props.children}</div>
            </div>
        )
    }
}

export default Comment
