import React, { PureComponent } from 'react'
import PropsTypes from 'prop-types'

export default class AdvancedTabSelector extends PureComponent {
    // 通过prop-types 设置传入的props类型
    // array, bool, func, number, object, string, symbol
    static propsTypes = {
        value: PropsTypes.object,
        options: PropsTypes.array,
        children: PropsTypes.func,
        onChange: PropsTypes.func
    }

    static defaultProps = {
        value: null,
        options: [],
        children: () => { },
        onChange: () => { }
    }

    render() {
        const { value, options } = this.props;
        console.log(options)
        return (
            <div className="tab-selector">
                <ul>
                    {options.map(opt => (
                        <li
                            key={opt.val}
                            className={`tab-item ${opt.value === this.props.value ? 'selected' : ""}`}
                            onClick={() => this.props.onChange(opt.value)}
                        >
                            {opt.name}
                        </li>
                    ))}
                </ul>
                <br />
                <br />
                {this.props.value && this.props.children(this.props.value)}
            </div>
        )
    }
}

const colors = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Orange", value: "orange" }
];

export class AdvancedTabSelectorSample extends PureComponent {
    state = {
        color: null
    }

    render() {
        return (
            <div>
                <h3>Select color: </h3>
                <AdvancedTabSelector
                    options={colors}
                    onChange={(value) => this.setState({ color: value })}
                    value={this.state.color}
                >
                    {color => (
                        <span
                            style={{
                                display: "inline-block",
                                backgroundColor: color,
                                width: "40px",
                                height: "40px"
                            }}
                        />
                    )}
                </AdvancedTabSelector>
            </div>
        )
    }
}