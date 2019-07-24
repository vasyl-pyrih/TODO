import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';


const App = () => {

    const todoData = [
        {label: 'python', important: false, id: 1},
        {label: 'js', important: false, id: 2},
        {label: 'react', important: true, id: 3}
    ]

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ItemStatusFilter />
            <TodoList todos={todoData} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// 32