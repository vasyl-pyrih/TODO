import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


const App = () => {

    const todoData = [
        {label: 'python', important: false, id: 1},
        {label: 'js', important: false, id: 2},
        {label: 'react', important: true, id: 3}
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <SearchPanel />
            <ItemStatusFilter />
            <TodoList todos={todoData} />
        </div>
    )
}

export default App;