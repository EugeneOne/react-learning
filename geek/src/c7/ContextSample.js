import React from 'react'

const enStrings = {
    submit: 'submit',
    cancel: 'cancle'
}

const cnStrings = {
    submit: '提交',
    cancel: '取消'
}

// 创建Context,并设定默认值enString
const ContextSample = React.createContext(enStrings)

// Provider
class ContextProvider extends React.Component {

    state = { locale: cnStrings }

    toggleLocale = () => {
        const locale = this.state.locale === enStrings
            ? cnStrings
            : enStrings
        this.setState({ locale })
    }

    render() {
        return (
            <ContextSample.Provider value={this.state.locale}>
                <button onClick={this.toggleLocale}>
                    切换语言
                </button>
                {this.props.children}
            </ContextSample.Provider>
        )
    }
}


// Consumer
class ContextButton extends React.Component {
    render() {
        return (
            <ContextSample.Consumer>
                {locale => (
                    <div>
                        <button>{locale.cancel}</button>
                        &nbsp;<button>{locale.submit}</button>
                    </div>
                )}
            </ContextSample.Consumer>
        )
    }
}

export default () => (
    <div>
        <ContextProvider>
            <br />
            <ContextButton></ContextButton>
            <br />
        </ContextProvider>
    </div >
)