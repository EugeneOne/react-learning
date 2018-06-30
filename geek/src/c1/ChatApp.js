import React from 'react'
import withTimer from '../c6/withTimer'

class Message extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            msg: 'this.props.messages'
        }
    }
    // static getDerivedStateFromProps() {
    //     console.log('getDerivedStateFromProps')
    // }
    render() {
        return (
            <ul>
                {this.props.messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        )
    }
}

class ChatApp extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         messages: [],
    //         inputMsg: ''
    //     }
    // }

    state = {
        messages: [],
        inputMsg: ''
    }

    handleInput = evt => {
        console.log(evt.target.value)
        this.setState({
            inputMsg: evt.target.value
        })
        this.state.inputMsg = evt.target.value
    }

    handleSend = () => {
        const text = this.state.inputMsg
        this.setState({
            messages: [...this.state.messages, text],
            inputMsg: ''
        })
    }

    render() {
        return (
            <div className="chatApp">
                <Message messages={this.state.messages} />
                <input value={this.state.inputMsg} onInput={this.handleInput} />
                <button onClick={this.handleSend}>Send</button>

                <h2>{this.props.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default withTimer(ChatApp)
