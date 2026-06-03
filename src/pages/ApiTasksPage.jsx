import { useState, useEffect } from 'react';

function ApiTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="section">
        <div className="section__corner section__corner--tl"></div>
        <div className="section__corner section__corner--tr"></div>
        <div className="section__corner section__corner--bl"></div>
        <div className="section__corner section__corner--br"></div>
        <h2 className="section__title">✦ загрузка ✦</h2>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p className="quote__text">тихие мысли собираются...</p>
          <div className="footer__line" style={{ width: '40px', margin: '1rem auto' }}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section">
        <div className="section__corner section__corner--tl"></div>
        <div className="section__corner section__corner--tr"></div>
        <div className="section__corner section__corner--bl"></div>
        <div className="section__corner section__corner--br"></div>
        <h2 className="section__title">✦ тишина ✦</h2>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p className="char-card__desc" style={{ color: '#aa5555' }}>ошибка: {error}</p>
          <p className="char-card__desc">попробуй перезагрузить страницу</p>
          <div className="footer__line" style={{ width: '40px', margin: '1rem auto' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="section__corner section__corner--tl"></div>
      <div className="section__corner section__corner--tr"></div>
      <div className="section__corner section__corner--bl"></div>
      <div className="section__corner section__corner--br"></div>
      <h2 className="section__title">✦ чужие мысли ✦</h2>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <span className="task-item__bullet">
              {task.completed ? '✓' : '—'}
            </span>
            <span className="task-item__title" style={{ 
              textDecoration: task.completed ? 'line-through' : 'none',
              opacity: task.completed ? 0.5 : 0.8
            }}>
              {task.title}
            </span>
            <span className="task-item__delete" style={{ opacity: 0.4 }}>
              [{task.completed ? 'готово' : 'ждёт'}]
            </span>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <div className="footer__line" style={{ width: '40px', margin: '0 auto 1rem' }}></div>
        <p className="char-card__desc" style={{ fontSize: '0.6rem', color: '#555' }}>
          источник: jsonplaceholder.typicode.com
        </p>
      </div>
    </div>
  );
}

export default ApiTasksPage;