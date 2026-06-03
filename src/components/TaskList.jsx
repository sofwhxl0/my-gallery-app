import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, deleteTask, toggleTask }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list__empty">
        <p>дневник пуст</p>
        <span>— — —</span>
        <div className="footer__line" style={{ width: '30px', margin: '1rem auto' }}></div>
        <p className="char-card__desc" style={{ fontSize: '0.65rem' }}>
          напиши что-нибудь...
        </p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;