import { useState } from 'react';
import './TaskForm.css';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form__input"
        placeholder="напиши свою мысль..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="task-form__btn">[ сохранить ]</button>
    </form>
  );
}

export default TaskForm;