import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../features/todoSlice';

const TodoList = () => {
    const tasks = useSelector((state) => state.todos.tasks);
    const dispatch = useDispatch();

    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks yet!</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '10px',
                                alignItems: 'center',
                            }}
                        >
                            <span
                                onClick={() => dispatch(toggleTask(task.id))}
                                style={{
                                    textDecoration: task.completed ? 'line-through' : 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                {task.text}
                            </span>
                            <button
                                onClick={() => dispatch(removeTask(task.id))}
                                style={{
                                    padding: '4px 8px',
                                    color: '#FF1493',
                                    background: '#FFB6C1',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;
