import React, { useState } from 'react';

const Teht = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Tehtavalista</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleTaskChange}
          placeholder="Lisaa uusi tehtava"
        />
        <button onClick={addTask}>Lisaa</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Poista</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tehtava;