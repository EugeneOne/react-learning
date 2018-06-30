import React from 'react'
import { createStore, bindActionCreators, combineReducers } from 'redux'

function run() {
    const initState = { count: 1 }
    // reducer
    const couter = (state = initState, action) => {
        console.log(action)
        switch (action.type) {
            case 'PLUS_ONE':
                return { count: state.count + 1 }
                break;
            case 'MINUS_ONE':
                return { count: state.count - 1 }
            default:
                break;
        }
        return state
    }

    const todos = (state = {}) => state

    const store = createStore(combineReducers({
        couter,
        todos
    }))
    // const store = createStore(couter)

    // Action creator
    function plusOne() {
        // action
        return { type: "PLUS_ONE" };
    }

    function minusOne() {
        return { type: "MINUS_ONE" };
    }

    plusOne = bindActionCreators(plusOne, store.dispatch)

    // 监听store 在dispatch之前
    store.subscribe(() => console.log(store.getState()));
    plusOne()
    // store.dispatch({ type: 'PLUS_ONE' })
    store.dispatch({ type: 'MINUS_ONE' })
}

export default () => (
    <div>
        <button onClick={run}>Run</button>
        <p>* 请打开控制台查看运行结果</p>
    </div>
);