import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todolist'

export default props => (
    
    <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm />
        <TodoList />
    </div>
)
    