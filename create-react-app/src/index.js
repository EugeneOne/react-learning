import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CommentBox from './comment/commentBox'
import registerServiceWorker from './registerServiceWorker'

let data = [
    { name: 'index', date: '刚刚', text: '来自index' },
    { name: 'index2', date: '一分钟前', text: '来自index02' }
]

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<CommentBox data={data} />, document.getElementById('app'))
registerServiceWorker()
