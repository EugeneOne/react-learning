import React, { Component } from 'react'
import Note from './Note'
import { loadCollection, db } from '../database'

class Notes extends Component {
    constructor(props) {
        super(props)

        this.getInitialData()
    }
    state = {
        entities: []
    }

    getInitialData() {
        loadCollection('notes').then(collection => {
            // collection.insert([
            //     {
            //         body: 'hello2~'
            //     }
            // ])
            // db.saveDatabase()
            const entities = collection
                .chain()
                .find()
                .simplesort('$loki', 'isdesc')
                .data()
            this.setState({
                entities
            })
        })
    }

    creatEntity = () => {
        loadCollection('notes').then(collection => {
            const entity = collection.insert({
                body: ''
            })

            db.saveDatabase()

            this.setState(prevState => {
                const _entities = prevState.entities
                _entities.unshift(entity)
                return {
                    entities: _entities
                }
            })
        })
    }

    destroyEntity = entity => {
        const _entities = this.state.entities.filter(_entity => {
            return _entity.$loki !== entity.$loki
        })
        this.setState({
            entities: _entities
        })

        loadCollection('notes').then(collection => {
            collection.remove(entity)
            db.saveDatabase()
        })
    }

    render() {
        const entities = this.state.entities
        const noteItems = entities.map(entity => {
            return (
                <Note
                    key={entity.$loki}
                    entity={entity}
                    destroyEntity={this.destroyEntity}
                />
            )
        })
        console.log(noteItems)

        return (
            <div className="ui container notes">
                <h4 className="ui horizontal divider header">
                    <i className="paw icon" />yqwan Notes
                </h4>
                <button
                    onClick={this.creatEntity}
                    href=""
                    className="ui right floated basic violet button"
                >
                    添加笔记
                </button>
                <div className="ui divided items">
                    {noteItems}
                    {!entities.length && (
                        <span className="ui small disabled header">
                            还没有笔记，请添加
                        </span>
                    )}
                </div>
            </div>
        )
    }
}

export default Notes
