import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import ItemAddForm from '../item-add-form';

import './app.css';


export default class App extends Component {

    maxId = 100;

    constructor() {
        super();

        this.state = {
            todoData: [
                this.createTodoItem('Python'),
                this.createTodoItem('Django'),
                this.createTodoItem('JS'),
            ]
        }

    }
    

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    addItem = (text) => {
        // generate id
        const newItem = this.createTodoItem(text);

        // add elem in array
        this.setState(({ todoData }) => {

            const newArray = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArray
            }

        })

    };


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

    onToggleImportant = (id) => {
        console.log('Important', id);
    }

    onToggleDone = (id) => {

        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            
            // 1. update object
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done}

            // 2. constarust new array
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }

        });
       
    }

    render() {

        const doneCount = this.state.todoData
                        .filter((el) => el.done).length;

        const todoCount = this.state.todoData.length - doneCount;
        console.log(this.state.todoData.lenght);

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <SearchPanel />
                <ItemStatusFilter />
                <TodoList 
                    todos={ this.state.todoData }
                    onDeleted={ this.deleteItem } 
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }    
                />
                <ItemAddForm 
                    onItemAdded={ this.addItem  } />
            </div>
        )
    }

}
