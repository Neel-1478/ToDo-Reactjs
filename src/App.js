import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import DigitalClock from './components/DigitalClock';
const App = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>To-Do List</h1>
            <TodoInput />
            <TodoList />
            <DigitalClock />
            

        </div>
    );
};

export default App;
