import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


export default class App extends Component {

    constructor() {
        super();

        this.state = {
            todoData: [
                {label: 'python', important: false, id: 1},
                {label: 'js', important: false, id: 2},
                {label: 'react', important: true, id: 3}
            ]
        }

    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {

            const idx = todoData.findIndex((el) => el.id === id);
            
            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            }

        });
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <SearchPanel />
                <ItemStatusFilter />
                <TodoList 
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem } />
            </div>
        )
    }

}
