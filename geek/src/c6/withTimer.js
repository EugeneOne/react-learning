import React from 'react'

export default function withTimer(WrappedComponent) {
    return class extends React.Component {
        state = { time: new Date() }

        componentDidMount() {
            this.interTime = setInterval(() => {
                this.tick()
            }, 1000)
        }
        componentWillUnmount() {
            clearInterval(this.interTime)
        }
        tick() {
            this.setState({
                time: new Date()
            })
        }
        render() {
            return <WrappedComponent time={this.state.time} />
        }
    }
}
