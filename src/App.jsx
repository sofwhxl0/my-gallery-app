import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CharacterCard from './components/CharacterCard';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import MangaQuote from './components/MangaQuote';
import MoodTracker from './components/MoodTracker';
import PunpunBird from './components/PunpunBird';
import ApiTasksPage from './pages/ApiTasksPage';
import AboutPage from './pages/AboutPage';
import './App.css';

// Статические данные для персонажей
const characters = [
  { name: 'ПУНПУН', role: 'птица', desc: 'наблюдает. молчит. мечтает улететь.' },
  { name: 'АЙДЗУ', role: 'девочка', desc: 'доброе сердце. любит тишину.' },
  { name: 'СЭКИ', role: 'мечтатель', desc: 'иллюзии реальнее жизни.' },
  { name: 'МИЯКО', role: 'странница', desc: 'свободная. ищет. надеется.' }
];

function App() {
  // Состояния для 2-й практики
  const [tasks, setTasks] = useState([
    { id: 1, title: 'смотреть на облака', completed: false },
    { id: 2, title: 'не забыть дышать', completed: false },
    { id: 3, title: 'написать в дневник', completed: false }
  ]);
  const [mood, setMood] = useState('neutral');

  // CRUD операции для задач
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
    <div className="app">
      <Header />

      <Routes>
        {/* Главная страница - ВСЕ элементы 2-й практики */}
        <Route path="/" element={
          <>
            <Hero />
            <PunpunBird mood={mood} />
            
            <div className="section">
              <div className="section__corner section__corner--tl"></div>
              <div className="section__corner section__corner--tr"></div>
              <div className="section__corner section__corner--bl"></div>
              <div className="section__corner section__corner--br"></div>
              <h2 className="section__title">✦ настроение ✦</h2>
              <MoodTracker mood={mood} setMood={setMood} />
            </div>

            <div className="section">
              <div className="section__corner section__corner--tl"></div>
              <div className="section__corner section__corner--tr"></div>
              <div className="section__corner section__corner--bl"></div>
              <div className="section__corner section__corner--br"></div>
              <h2 className="section__title">✦ персонажи ✦</h2>
              <div className="grid-3col">
                {characters.map((c, i) => (
                  <CharacterCard key={i} {...c} />
                ))}
              </div>
            </div>

            <div className="section">
              <div className="section__corner section__corner--tl"></div>
              <div className="section__corner section__corner--tr"></div>
              <div className="section__corner section__corner--bl"></div>
              <div className="section__corner section__corner--br"></div>
              <h2 className="section__title">✦ цитаты ✦</h2>
              <MangaQuote />
            </div>

            <div className="section">
              <div className="section__corner section__corner--tl"></div>
              <div className="section__corner section__corner--tr"></div>
              <div className="section__corner section__corner--bl"></div>
              <div className="section__corner section__corner--br"></div>
              <h2 className="section__title">✦ дневник ✦</h2>
              <TaskForm addTask={addTask} />
              <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
            </div>
          </>
        } />

        {/* Страница с API-задачами (3-я практика) */}
        <Route path="/api-tasks" element={<ApiTasksPage />} />

        {/* Страница о проекте */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;