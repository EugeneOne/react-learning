import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom'
import {
    Router,
    Route,
    Link,
    browserHistory,
    IndexRoute,
    Redirect
} from 'react-router'
import './index.css'
import CommentBox from './comment/commentBox'
import registerServiceWorker from './registerServiceWorker'

let data = [
    { name: 'index', date: '刚刚', text: '来自index' },
    { name: 'index2', date: '一分钟前', text: '来自index02' }
]

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">
                        首页
                    </Link>
                    <Link to="/tv" className="item" query={{ orderBy: 'data' }}>
                        电视
                    </Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}

class TV extends React.Component {
    constructor(props) {
        super(props)
        // 获取路由参数
        console.log(this.props.location)
    }

    render() {
        return (
            <div>
                <div className="ui info message">电视节目列表</div>
                {this.props.children}
            </div>
        )
    }
}

class Show extends React.Component {
    constructor(props) {
        super(props)
        // 获取路由参数
        console.log(this.props.params)
    }

    render() {
        return <h3>节目</h3>
    }
}

class Home extends React.Component {
    render() {
        return <div className="ui info message">首页内容</div>
    }
}

// ReactDOM.render(
//     <CommentBox data={data} url="src/comments.json" />,
//     document.getElementById('app')
// )

function handleEnter() {
    console.log('handleEnter')
}

function handleLeave() {
    console.log('handleLeave')
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="tv" component={TV}>
                <Route
                    path="show/:id"
                    component={Show}
                    onEnter={handleEnter}
                    onLeave={handleLeave}
                />
                <Redirect from="/show/:id" to="show/:id" />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
)

registerServiceWorker()
