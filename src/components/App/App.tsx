import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'
function App() {
  return (
    <div className="todoapp">
      <h1>Задачи</h1>
      <section>
        <NewTaskForm />
        <TaskList />
        <Footer />
      </section>
    </div>
  )
}

export default App
