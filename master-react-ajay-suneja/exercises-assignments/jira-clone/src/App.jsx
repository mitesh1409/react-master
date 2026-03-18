import './App.css';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  return (
    <div className='app'>
      <header className='app_header'>Jira Board</header>
      <TaskForm />
      <main className='app_main'>
        <section className='task_column'>One</section>
        <section className='task_column'>Two</section>
        <section className='task_column'>Three</section>
        <section className='task_column'>Four</section>
      </main>
    </div>
  );
}

export default App;
