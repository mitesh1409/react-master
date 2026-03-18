import './App.css';
import TaskColumn from './components/TaskColumn/TaskColumn';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  return (
    <div className='app'>
      <header className='app_header'>
        <h1>Jira Board</h1>
      </header>
      <TaskForm />
      <main className='app_main'>
        <TaskColumn title="Ready for Development" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready for Test" />
        <TaskColumn title="Closed" />
      </main>
    </div>
  );
}

export default App;
