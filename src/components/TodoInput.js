import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todoSlice";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input.trim())); // Dispatch the action to add the task
      setInput(""); // Clear the input after task is added
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Flex container for input and button */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
    </div>
  );
};

export default TodoInput;
