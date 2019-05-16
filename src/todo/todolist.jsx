import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'

import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className={'text-right'}>
                    <IconButton style={'success'} icon={'check'} hide={todo.done} onClick={() => props.markAsDone(todo)}/>
                    <IconButton style={'warning'} icon={'undo'} hide={!todo.done} onClick={() => props.markAsPending(todo)}/>
                    <IconButton style={'danger'} icon={'trash-o'} hide={!todo.done} onClick={() => props.remove(todo)}/>
                </td>
            </tr>
        ))
    }

    return (
        <table className={'table'}>
            <thead>
            <tr>
                <th>Descricão</th>
                <th className={'tableActions text-right'}>Ações</th>
            </tr>
            </thead>
            <tbody>
            {renderRows()}
            </tbody>
        </table>
    )
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({markAsDone, markAsPending, remove}, dispatch)

const mapStateToProps = state => ({ list: state.todo.list })
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)