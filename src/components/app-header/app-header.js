import React from 'react';

const AppHeader  = ({toDo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1> ToDo List </h1>
            <h2 className='h2'>{toDo} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;