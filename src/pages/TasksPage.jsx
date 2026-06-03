import { useState } from 'react';
import Hero from '../components/Hero';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function TasksPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'смотреть на облака', completed: false },
    { id: 2, title: 'не забыть дышать', completed: false },
    { id: 3, title: 'написать в дневник', completed: false }
  ]);

  const addTask = (text) => {
    if (text.trim()) {
      const newTask = {
        id: Date.now(),
        title: text,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <>
      <Hero />
      
      <div className="section">
        <div className="section__corner section__corner--tl"></div>
        <div className="section__corner section__corner--tr"></div>
        <div className="section__corner section__corner--bl"></div>
        <div className="section__corner section__corner--br"></div>
        <h2 className="section__title">✦ мои задачи ✦</h2>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
      </div>
    </>
  );
}

export default TasksPage;