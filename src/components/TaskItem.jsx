import './TaskItem.css';

function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li className="task-item">
      <span 
        className="task-item__bullet"
        onClick={() => toggleTask(task.id)}
        style={{ cursor: 'pointer' }}
      >
        {task.completed ? '✓' : '—'}
      </span>
      <span 
        className="task-item__title"
        style={{ 
          textDecoration: task.completed ? 'line-through' : 'none',
          opacity: task.completed ? 0.5 : 1,
          cursor: 'pointer'
        }}
        onClick={() => toggleTask(task.id)}
      >
        {task.title}
      </span>
      <button 
        className="task-item__delete" 
        onClick={() => deleteTask(task.id)}
      >
        [x]
      </button>
    </li>
  );
}

export default TaskItem;