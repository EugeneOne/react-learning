import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    getSnapshotBeforeUpdate() {
        return 'getSnapshotBeforeUpdate'
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.timeInter = setInterval(() => this.tick(), 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdata', snapshot, prevState)
    }

    componentWillUnmount() {
        clearInterval(this.timeInter)
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

    render() {
        return (
            <div>
                <h2>时钟</h2>
                <h2>现在是：{this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
